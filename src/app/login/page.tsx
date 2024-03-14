'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AlertModal from '@/shared/ui/AlertModal';
import LoginForm from '@/features/Login/ui/LoginForm';
import SignUpLink from '@/features/Login/ui/SignUpLink';
import LogoLink from '@/features/LogoLink/LogoLink';

interface LoginFormProps {
  email: string;
  password: string;
}

interface TokenResponse {
  item: {
    token: string;
  };
}

const LoginPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/notice');
    }
  }, [router]);

  const onSubmit = async (data: LoginFormProps): Promise<void> => {
    try {
      const response = await axios.post<TokenResponse>(
        'https://bootcamp-api.codeit.kr/api/3-2/the-julge/token',
        data,
      );
      const { token } = response.data.item;
      window.localStorage.setItem('accessToken', token);

      if (response.status === 200) {
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
      <LoginForm onSubmit={onSubmit} />
      <SignUpLink />
    </div>
  );
};

export default LoginPage;
