/* eslint-disable @typescript-eslint/no-unsafe-call */
import { redirect } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { cookies } from 'next/headers';
import { DecodedToken } from '@/widgets/Header/Type.ts';
import { UserData } from './Type.ts';
import { AllNotice } from '@/entities/Post/types';
import { ShopData, ShopItem } from '@/features/Create-Shop/Type';

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

export const getShopId = async (): Promise<string> => {
  const userId = getUserId();
  const response = await axios(
    `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${userId}`,
  );
  const userInfo: UserData = (await response.data) as UserData;
  if (userInfo.item.shop) {
    return userInfo.item.shop.item.id;
  }
  return '';
};

export const getShopNotice = async (
  shopIdParams: string,
): Promise<AllNotice | null> => {
  if (shopIdParams) {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}/notices`,
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

export const getShopInfo = async (shopIdParams: string): Promise<ShopItem> => {
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
};
