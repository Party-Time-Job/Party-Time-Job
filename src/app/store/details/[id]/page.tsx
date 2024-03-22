'use client';

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { DecodedToken } from '@/pages/EmployerPage/Api/type';
import DetailsPage from '@/pages/EmployerPage/DetailsPage';

const Details = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [storeId, setStoreId] = useState<string>('');

  const getUserId = async (userIdParam: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${userIdParam}`,
      );
      const userInfo = await response.json();
      if (userInfo.item.shop) {
        setStoreId(userInfo.item.shop.item.id);
      } else {
        setStoreId('');
      }
      setUserType(userInfo.item.type);
      setUserId(userInfo.item.id);
    } catch (error) {
      console.log(error);
    }
  };

  // 로그인 -> 계정 유형이 employer -> 디테일 페이지 이동
  // token 가져오기 (임시로 로컬스토리지)
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      // token decode 하기
      const decodedToken: DecodedToken = jwtDecode(token);
      // decoded token -> accountId 와 accountType 조회
      getUserId(decodedToken.userId);
    }
  }, [token]);

  // accountId 와 accountType Props로 내려주기
  return <DetailsPage userType={userType} userId={userId} storeId={storeId} />;
};

export default Details;
