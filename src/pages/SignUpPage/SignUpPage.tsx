'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AlertModal from '@/shared/ui/AlertModal';
import LogoLink from '@/features/LogoLink/LogoLink';
import SignUpForm from '@/features/Signup/ui/SignUpForm';
import { SignupFormProps, TokenResponse } from '@/features/Signup/Types';
import LogInLink from '@/features/Signup/ui/LogInLink';

const SignUpPage = () => {
  const [completedModal, setCompletedModal] = useState<boolean>(false);
  const [duplicateModal, setDuplicateModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/notice');
    }
  }, [router]);

  const onSubmit = async (data: SignupFormProps): Promise<void> => {
    try {
      const response = await axios.post<TokenResponse>(
        'https://bootcamp-api.codeit.kr/api/3-2/the-julge/users',
        data,
      );

      if (response.status === 201) {
        setCompletedModal(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 409) {
          setDuplicateModal(true);
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleCloseDuplicateModal = () => {
    setDuplicateModal(false);
  };

  const handleCloseCompletedModal = () => {
    setCompletedModal(false);
    router.push('/login');
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      {completedModal && (
        <AlertModal
          modalText='가입이 완료되었습니다.'
          buttonText='확인'
          onClick={handleCloseCompletedModal}
        />
      )}
      {duplicateModal && (
        <AlertModal
          modalText='이미 사용중인 이메일입니다.'
          buttonText='확인'
          onClick={handleCloseDuplicateModal}
        />
      )}
      <LogoLink />
      <SignUpForm onSubmit={onSubmit} />
      <LogInLink />
    </div>
  );
};

export default SignUpPage;
