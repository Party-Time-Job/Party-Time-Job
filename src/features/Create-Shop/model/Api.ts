import axios from 'axios';
import { getCookie } from 'cookies-next';
import { UserData } from '@/app/shop/model/Type';

const getShopId = async (): Promise<string> => {
  const userId = getCookie('userid');
  const response = await axios(
    `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${userId}`,
  );
  const userInfo: UserData = (await response.data) as UserData;
  if (userInfo.item.shop) {
    return userInfo.item.shop.item.id;
  }
  return '';
};

export default getShopId;
