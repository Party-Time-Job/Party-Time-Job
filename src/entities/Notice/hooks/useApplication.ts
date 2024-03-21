import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import getUserToken from '@/pages/NoticeDetailPage/utils/getUserToken';
import { DecodedToken } from '@/widgets/Header/Type';
import { AllApply } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';

const useApplication = (shopId: string, noticeId: string) => {
  const [isApplied, setIsApplied] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const token = getUserToken();

  useEffect(() => {
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const { userId } = decoded;

      const testUserApplyList = async () => {
        const response = await getMethod<AllApply>(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications?limit=100`,
        );
        const userApply = response.items.filter(apply => {
          return userId === apply.item.user.item.id;
        });

        if (userApply.length !== 0 && userApply[0].item.status === 'pending') {
          setIsApplied(true);
          setApplicationId(userApply[0].item.id);
        }
      };
      testUserApplyList();
    }
  }, []);

  return { isApplied, applicationId, token };
};
export default useApplication;
