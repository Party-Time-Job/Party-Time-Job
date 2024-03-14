'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AlertModal from '@/shared/ui/AlertModal';
import LogInForm from '@/features/LogIn/ui/LogInForm';
import SignUpLink from '@/features/LogIn/ui/SignUpLink';
import LogoLink from '@/features/LogoLink/LogoLink';
import { LoginFormProps, TokenResponse } from '@/features/LogIn/Types';

const LogInPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/notice');
    }
  }, [router]);

  /**
   * 로그인 폼을 제출하면 서버에 로그인 요청을 보내고, 로그인 성공 시 토큰을 받아 로컬스토리지에 저장합니다.
   * 400, 404 에러 발생 시 이메일 및 비밀번호 확인 모달을 띄웁니다.
   */
  const onSubmit = async (data: LoginFormProps): Promise<void> => {
    try {
      const response = await axios.post<TokenResponse>(
        'https://bootcamp-api.codeit.kr/api/3-2/the-julge/token',
        data,
      );
      if (response.status === 200) {
        const { token } = response.data.item;
        window.localStorage.setItem('accessToken', token);
        router.push('/notice');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error?.response?.status === 400 ||
          error?.response?.status === 404
        ) {
          setShowModal(true);
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      {showModal && (
        <AlertModal
          modalText='이메일 또는 비밀번호를 확인해주세요.'
          buttonText='확인'
          onClick={handleCloseModal}
        />
      )}
      <LogoLink />
      <LogInForm onSubmit={onSubmit} />
      <SignUpLink />
    </div>
  );
};

export default LogInPage;
