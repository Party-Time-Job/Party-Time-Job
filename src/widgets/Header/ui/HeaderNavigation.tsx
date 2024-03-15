'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import LoginLink from './LoginLink';
import SignUpLink from './SignUpLink';

interface DecodedToken {
  userId: string;
  type: 'employee' | 'employer';
}

// 로그인을 한 상태이고, 유저 정보의 타입이 employee일 경우 내 프로필, 로그아웃, 알림 아이콘을 보여준다.
// 로그인을 한 상태이고, 유저 정보의 타입이 employer일 경우 내 가게, 로그아웃, 알림 아이콘을 보여준다.
// 로그인을 한 상태가 아닐 경우 로그인, 회원가입을 보여준다.
const HeaderNavigation = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
      try {
        const decoded: DecodedToken = jwtDecode(storedToken);
        if (decoded && typeof decoded === 'object' && decoded.userId) {
          axios
            .get(
              `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${decoded.userId}`,
            )
            .then(response => {
              setUserType(response.data.item.type);
            })
            .catch(error => console.error('유저 정보 가져오기 실패:', error));
        }
      } catch (error) {
        console.error('JWT 디코드 오류:', error);
      }
    }
  }, []);

  return (
    <>
      {!token && (
        <>
          <LoginLink />
          <SignUpLink />
        </>
      )}

      {token && userType === 'employee' && (
        <>
          <h1>나는야 알바생</h1>
        </>
      )}
      {token && userType === 'employer' && (
        <>
          <h1>나는야 사장님</h1>
        </>
      )}
    </>
  );
};

export default HeaderNavigation;
