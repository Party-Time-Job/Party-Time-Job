import { Notice } from '@/entities/Post/types';

const getSearchList = (noticeItemList: Notice[], keyword: string) => {
  const searchResult = noticeItemList.filter(notice => {
    return notice.item.shop.item.name.includes(keyword);
  });
  return searchResult;
};

export default getSearchList;
