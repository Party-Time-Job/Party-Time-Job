import {
  sortByDeadline,
  sortByHourlyPay,
  sortByWorkHour,
  sortByWord,
} from './utils/sortNotice.ts';

interface Props {
  category: string;
  itemList: Notice[];
  updateItemList: (sortedList: Notice[]) => void;
  updateSortCategory: (sortCategory: string) => void;
  handleToggleSort: () => void;
}

const SortButton = ({
  category,
  itemList,
  updateItemList,
  updateSortCategory,
  handleToggleSort,
}: Props) => {
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
    updateSortCategory(category);
    handleToggleSort();
  };
  return (
    <button
      onClick={handleSortClick}
      className='text-center text-[14px] leading-[22px]'
    >
      {category}
    </button>
  );
};

export default SortButton;
