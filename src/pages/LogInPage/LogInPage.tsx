'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import AlertModal from '@/shared/ui/AlertModal';
import LogInForm from '@/features/LogIn/ui/LogInForm';
import SignUpLink from '@/features/LogIn/ui/SignUpLink';
import { LoginFormProps, TokenResponse } from '@/features/LogIn/Types';
import AccountPageLogoLink from '@/features/AccountPageLogoLink/AccountPageLogoLink';
import TokenState from '@/atoms/tokenState';
import userTypeState from '@/atoms/userTypeState';

const LogInPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const setToken = useSetRecoilState(TokenState);
  const setUserType = useSetRecoilState(userTypeState);
  const currentToken = useRecoilValue(TokenState);

  useEffect(() => {
    if (currentToken) {
      router.push('/notice'); // 상태 변경 감지 후 페이지 이동
    }
  }, [router, currentToken]); // token 상태를 의존성 배열에 포함

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
        const { token, user } = response.data.item;
        setCookie('token', token);
        setCookie('userid', user.item.id);
        setToken(token);
        setUserType(user.item.type);
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
      <AccountPageLogoLink />
      <LogInForm onSubmit={onSubmit} />
      <SignUpLink />
    </div>
  );
};

export default LogInPage;
