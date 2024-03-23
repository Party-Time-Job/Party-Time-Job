import { Notice } from '@/entities/Post/types';

/**
 *
 * @param {Notice[]} noticeItemList 전체 공고 리스트
 * @param {string} keyword 검색어
 * @returns 검색어에 해당하는 공고 리스트
 */
const getSearchList = (noticeItemList: Notice[], keyword: string) => {
  const searchResult = noticeItemList.filter(notice => {
    return notice.item.shop.item.name.includes(keyword);
  });
  return searchResult;
};

export default getSearchList;
