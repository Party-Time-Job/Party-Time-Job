'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import LoginLink from './LoginLink';
import SignUpLink from './SignUpLink';
import MyProfileLink from './MyProfileLink';
import LogoutButton from './LogoutButton';
import MyStoreLink from './MyStoreLink';
import NotificationIcon from './NotificationIcon';
import { DecodedToken } from '../Type.ts';

/**
 * 로그인을 한 상태가 아닐 경우 로그인, 회원가입을 보여준다.
 * 로그인을 한 상태이고, 유저 정보의 타입이 employee일 경우 내 프로필, 로그아웃, 알림 아이콘을 보여준다.
 * 로그인을 한 상태이고, 유저 정보의 타입이 employer일 경우 내 가게, 로그아웃, 알림 아이콘을 보여준다.
 */
const HeaderNavigation = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('accessToken');
    // 로컬스토리지에 저장된 토큰 가져오기
    if (storedToken) {
      setToken(storedToken);
      // 토큰 상태에 저장
      try {
        const decoded: DecodedToken = jwtDecode(storedToken);
        // jwt-decode 라이브러리 설치해야 사용 가능함 (jwt 토큰을 디코드 해주는 라이브러리)
        // 명세서에 해당 라이브러리 사용하라고 명시되어 있음
        // 토큰을 디코드하여 userId를 가져옴
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
        // 디코드하여 가져온 userId로 get 요청을 보내서 유저 정보를 가져옴
        // 가져온 유저 정보의 type을 상태에 저장
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
          <MyProfileLink />
          <LogoutButton />
          <NotificationIcon />
        </>
      )}
      {token && userType === 'employer' && (
        <>
          <MyStoreLink />
          <LogoutButton />
          <NotificationIcon />
        </>
      )}
    </>
  );
};

export default HeaderNavigation;
