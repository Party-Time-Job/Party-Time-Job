import { useEffect, useState } from 'react';
import { AllApply, Notice } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';

const useNoticeStatus = (shopId: string, noticeId: string) => {
  const [isOutDatedNotice, setIsOutDatedNotice] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const setOutDated = async () => {
    const notice = await getMethod<Notice>(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}`,
    );
    const application = await getMethod<AllApply>(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications?limit=100`,
    );
    const applyComplete = application.items.filter(apply => {
      return apply.item.status === 'accepted';
    });
    if (
      applyComplete.length === 0 &&
      new Date(notice.item.startsAt) < new Date()
    ) {
      setIsOutDatedNotice(true);
    }
    if (applyComplete.length !== 0 && notice.item.closed) {
      setIsClosed(true);
    }
  };

  useEffect(() => {
    setOutDated();
  }, []);
  return { isOutDatedNotice, isClosed };
};
export default useNoticeStatus;
