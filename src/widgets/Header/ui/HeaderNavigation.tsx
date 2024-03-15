'use client';

import { useEffect } from 'react';
import LoginLink from './LoginLink';
import SignUpLink from './SignUpLink';

const HeaderNavigation = () => {
  useEffect(() => {
    // 로그인을 한 상태이고, 유저 정보의 타입이 employee일 경우 내 프로필, 로그아웃, 알림 아이콘을 보여준다.
    // 로그인을 한 상태이고, 유저 정보의 타입이 employer일 경우 내 가게, 로그아웃, 알림 아이콘을 보여준다.
    // 로그인을 한 상태가 아닐 경우 로그인, 회원가입을 보여준다.
  });

  return (
    <>
      <LoginLink />
      <SignUpLink />
      <div>알림아이콘</div>
    </>
  );
};

export default HeaderNavigation;
