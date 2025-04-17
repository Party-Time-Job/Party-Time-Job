/* eslint-disable @typescript-eslint/no-unsafe-call */
import { redirect } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { DecodedToken } from '@/widgets/Header/Type.ts';
import { AllNotice } from '@/entities/Post/types';
import { ShopData, ShopItem } from '@/features/Create-Shop/model/Type';

export const getUserId = (): string | undefined => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (token) {
    const decodedToken: DecodedToken = jwtDecode(token.value);
    if (decodedToken && decodedToken.userId) {
      return decodedToken.userId;
    }
  } else {
    redirect('/landing');
  }
  return '';
};

export const getShopNotice = async (
  shopIdParams: string,
  offset: number = 0,
  limit: number = 5,
): Promise<AllNotice | null> => {
  if (shopIdParams !== 'null') {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}/notices?offset=${offset}&limit=${limit}`,
        {
          next: {
            tags: ['noticeItemList'],
          },
        },
      );
      const result: AllNotice = (await response.json()) as AllNotice;
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else {
    return null;
  }
};

export const getShopInfo = async (
  shopIdParams: string,
): Promise<ShopItem | null> => {
  if (shopIdParams !== 'null') {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}`,
        {
          next: {
            tags: ['shopInfo'],
          },
        },
      );
      const shopData = (await response.json()) as ShopData;
      const { item }: { item: ShopItem } = shopData;
      return item;
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else {
    return null;
  }
};
