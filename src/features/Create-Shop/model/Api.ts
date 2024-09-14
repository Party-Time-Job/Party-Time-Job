import axios from 'axios';
import { getCookie } from 'cookies-next';
import { UserData } from '@/app/shop/model/Type';
import { GeneratePresignedUrlType, UploadImageToS3Type } from './Type.ts';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';

const getShopId = async (): Promise<string> => {
  const userId = getCookie('userid');
  const response = await axios(`${BASE_URL}/users/${userId}`);
  const userInfo: UserData = (await response.data) as UserData;
  if (userInfo.item.shop) {
    return userInfo.item.shop.item.id;
  }
  return '';
};

const generatePresignedUrl = async ({
  imageName,
  setPresignedUrl,
}: GeneratePresignedUrlType) => {
  const token = getCookie('token');
  try {
    const response = await fetch(`${BASE_URL}/images`, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ name: imageName }),
    });
    const data = await response.json();
    if (response.ok) {
      setPresignedUrl(data.item.url);
    } else {
      console.error('Failed to generate pre-signed URL:', data);
    }
  } catch (error) {
    console.error('Error generating pre-signed URL:', error);
  }
};

const uploadImageToS3 = async ({
  fileName,
  presignedUrl,
  setUploadedImageUrl,
}: UploadImageToS3Type) => {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      body: fileName,
    });
    if (response.ok) {
      const imageUrl = presignedUrl.split('?')[0]; // Query 파라미터를 제거한 URL
      setUploadedImageUrl(imageUrl);
    } else {
      console.error('Failed to upload image:', response);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export { getShopId, generatePresignedUrl, uploadImageToS3 };
