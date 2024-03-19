import { Dispatch, SetStateAction } from 'react';
import { AllNotice } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';

const getNoticeList = async (
  setNoticeItemList: Dispatch<SetStateAction<AllNotice>>,
  offsetNumber: number,
  sortCategory: string,
  category?: string,
  searchValue?: string,
) => {
  if (category === 'search') {
    const response = await getMethod<AllNotice>(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/notices?offset=${offsetNumber}&limit=6&keyword=${searchValue}`,
    );
    setNoticeItemList(response);
    return;
  }
  const response = await getMethod<AllNotice>(
    `https://bootcamp-api.codeit.kr/api/3-2/the-julge/notices?offset=${offsetNumber}&limit=6&sort=${sortCategory}`,
  );
  setNoticeItemList(response);
};
export default getNoticeList;
