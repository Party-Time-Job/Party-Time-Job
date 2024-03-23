import { Dispatch, SetStateAction } from 'react';
import { AllNotice } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';
import convertDate from '@/features/Sort/utils/convertDate';

const getNoticeList = async (
  setNoticeItemList: Dispatch<SetStateAction<AllNotice>>,
  offsetNumber: number,
  sortCategory: string,
  category?: string,
  searchValue?: string,
  filterCondition?: { address?: string[]; date?: string; pay?: string },
) => {
  let url = `/notices?offset=${offsetNumber}&limit=6&sort=${sortCategory}`;

  if (category === 'search') {
    url += `&keyword=${searchValue}`;
    const response = await getMethod<AllNotice>(url);
    setNoticeItemList(response);
    return;
  }
  if (category === 'filter') {
    const addressQuery = filterCondition?.address
      ? filterCondition.address
          .map(address => `&address=${encodeURIComponent(address)}`)
          .join('&')
      : '';
    const dateQuery: string = filterCondition?.date
      ? `&startsAtGte=${encodeURIComponent(convertDate(filterCondition.date))}`
      : '';
    const payQuery = filterCondition?.pay
      ? `&hourlyPayGte=${filterCondition.pay}`
      : '';
    url = url + addressQuery + dateQuery + payQuery;
    if (searchValue) {
      url += `&keyword=${searchValue}`;
    }
    const response = await getMethod<AllNotice>(url);
    setNoticeItemList(response);
    return;
  }

  const response = await getMethod<AllNotice>(url);
  setNoticeItemList(response);
};
export default getNoticeList;
