import {
  sortByDeadline,
  sortByHourlyPay,
  sortByWorkHour,
  sortByWord,
} from './utils/sortNotice.ts';

interface Props {
  category: '마감임박순' | '시급많은순' | '시간적은순' | '가나다순';
  itemList: Notice[];
  updateItemList: (sortedList: Notice[]) => void;
}

const SortButton = ({ category, itemList, updateItemList }: Props) => {
  const sortItemList = () => {
    if (category === '마감임박순') {
      const newList = sortByDeadline(itemList);
      return newList;
    }
    if (category === '시급많은순') {
      const newList = sortByHourlyPay(itemList);
      return newList;
    }
    if (category === '시간적은순') {
      const newList = sortByWorkHour(itemList);
      return newList;
    }
    if (category === '가나다순') {
      const newList = sortByWord(itemList);
      return newList;
    }
    return itemList;
  };
  const handleSortClick = () => {
    const sortedList = sortItemList();
    updateItemList(sortedList);
  };
  return <button onClick={handleSortClick}>{category}</button>;
};

export default SortButton;
