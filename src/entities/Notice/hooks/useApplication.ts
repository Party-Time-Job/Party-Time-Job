import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { DecodedToken } from '@/widgets/Header/Type';
import { getMethod } from '@/shared/api/RequestMethod';
import { AllApply } from '@/entities/Post/types';

const useApplication = (shopId: string, noticeId: string) => {
  const [isApplied, setIsApplied] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const token = getCookie('token');
  useEffect(() => {
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const { userId } = decoded;

      const testUserApplyList = async () => {
        const response = await getMethod<AllApply>(
          `/shops/${shopId}/notices/${noticeId}/applications?limit=100`,
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
