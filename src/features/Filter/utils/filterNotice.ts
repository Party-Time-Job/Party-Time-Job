import { Dispatch, SetStateAction } from 'react';
import { Notice } from '@/entities/Post/types';
import { FilterCondition } from '@/entities/Notice/types';

/**
 * @param {string} dateString 날짜 문자열 ex) "2024-03-014T18:00:00.000Z"
 * @returns ex) '2024-03-14'
 */
function formatDate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 *
 * @param {Notice[]} noticeItemList 전체 공고 리스트
 * @param {FilterCondition} filterCondition 필터 조건
 * @param {Function} setItemList 필터링 된 공고 리스트로 업데이트하는 함수
 */
const filterNotice = (
  noticeItemList: Notice[],
  filterCondition: FilterCondition,
  setItemList: Dispatch<SetStateAction<Notice[]>>,
) => {
  const addressCondition = filterCondition.address;
  const dateCondition = filterCondition.date || '';
  const payCondition = filterCondition.pay
    ? parseInt(filterCondition.pay, 10)
    : undefined;

  if (addressCondition?.length === 0 && !dateCondition && !payCondition) {
    setItemList(noticeItemList);
    return;
  }

  const filteredNotice = noticeItemList.filter(notice => {
    let addressMatch = true;

    if (addressCondition && addressCondition.length > 0) {
      addressMatch = addressCondition.includes(notice.item.shop.item.address1);
    }

    const dateMatch =
      !dateCondition || dateCondition === formatDate(notice.item.startsAt);

    const payMatch =
      payCondition === undefined || payCondition <= notice.item.hourlyPay;

    return addressMatch && dateMatch && payMatch;
  });

  setItemList(filteredNotice);
};

export default filterNotice;
