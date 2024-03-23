import { useEffect, useState } from 'react';
import saveSeenNotice from '@/entities/Notice/utils/saveSeenNotice';
import { Notice, User } from '../types.ts';

const useDetailPost = (
  shopId: string,
  noticeId: string,
  applicationId: string,
  token: string,
  notice: Notice,
  userInfo: User | undefined,
) => {
  const [isToggle, setIsToggle] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const handleToggle = () => {
    setIsToggle(prev => !prev);
  };

  const handleCancelToggle = () => {
    setModalCategory('cancel');
    setIsToggle(prev => !prev);
  };

  const applyNotice = async () => {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 201) {
      setModalCategory('success');
      setIsToggle(true);
    }
  };

  const cancelNotice = async () => {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'canceled' }),
      },
    );

    if (response.status === 200) {
      setModalCategory('canceled');
      setIsToggle(true);
    }
  };

  const handleApplyClick = () => {
    if (!token) {
      setModalCategory('noLogin');
      setIsToggle(true);
      return;
    }

    if (
      !userInfo?.item.address ||
      !userInfo?.item.bio ||
      !userInfo?.item.name ||
      !userInfo?.item.phone
    ) {
      setModalCategory('noProfile');
      setIsToggle(true);
      return;
    }

    applyNotice();
  };

  const cancelClick = () => {
    cancelNotice();
  };

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = 'stable';

    if (isToggle) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isToggle]);

  useEffect(() => {
    saveSeenNotice(notice);
  }, []);

  return {
    isToggle,
    modalCategory,
    handleToggle,
    handleCancelToggle,
    handleApplyClick,
    cancelClick,
  };
};

export default useDetailPost;
