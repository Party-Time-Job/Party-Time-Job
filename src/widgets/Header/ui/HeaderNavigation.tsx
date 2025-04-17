'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRecoilState } from 'recoil';
import { getCookie } from 'cookies-next';
import axios from 'axios';
import LoginLink from './LoginLink';
import SignUpLink from './SignUpLink';
import MyProfileLink from './MyProfileLink';
import LogoutButton from './LogoutButton';
import MyStoreLink from './MyStoreLink';
import NotificationIcon from './NotificationIcon';
import { DecodedToken } from '../Type.ts';
import TokenState from '@/shared/atoms/tokenState.ts';
import userTypeState from '@/shared/atoms/userTypeState.ts';

/**
 * 로그인을 한 상태가 아닐 경우 로그인, 회원가입을 보여준다.
 * 로그인을 한 상태이고, 유저 정보의 타입이 employee일 경우 내 프로필, 로그아웃, 알림 아이콘을 보여준다.
 * 로그인을 한 상태이고, 유저 정보의 타입이 employer일 경우 내 가게, 로그아웃, 알림 아이콘을 보여준다.
 */
const HeaderNavigation = () => {
  const [token, setToken] = useRecoilState<string | null>(TokenState);
  const [userType, setUserType] = useRecoilState<string | null>(userTypeState);
  const [shopId, setShopId] = useState<string>('null');

  useEffect(() => {
    const storedToken = getCookie('token');
    // 쿠키에 저장된 토큰 가져오기
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
              if (response.data.item.shop) {
                setShopId(response.data.item.shop.item.id);
              }

              setUserType(response.data.item.type);
            })
            .catch(error => console.error('유저 정보 가져오기 실패:', error));
        }
        // 디코드하여 가져온 userId로 get 요청을 보내서 유저 정보를 가져옴
        // 가져온 유저 정보의 type을 상태에 저장
      } catch (error) {
        console.error('JWT 디코드 오류:', error);
      }
    } else {
      // 쿠키에 토큰이 없다면 Recoil 상태 초기화
      setToken(null);
      setUserType(null);
    }
  }, [setToken, setUserType]);

  return (
    <>
      {!token && (
        <div className='flex gap-4'>
          <LoginLink />
          <SignUpLink />
        </div>
      )}

      {token && userType === 'employee' && (
        <div className='flex gap-4'>
          <MyProfileLink />
          <LogoutButton />
          <NotificationIcon />
        </div>
      )}
      {token && userType === 'employer' && (
        <div className='flex gap-4'>
          <MyStoreLink shopId={shopId} />
          <LogoutButton />
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
