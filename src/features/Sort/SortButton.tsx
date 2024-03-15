import { Notice } from '@/entities/Post/types.ts';
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

/**
 * @param {Object} props - SortButton 컴포넌트의 props
 * @param {string} props.category - 정렬 방식
 * @param {Notice[]} props.itemList - 공고 리스트
 * @param {Function} props.updateItemList - 정렬된 공고 리스트로 업데이트 하는 콜백함수
 * @param {Function} props.updateSortCategory - 정렬 방식 표기를 업데이트 하는 콜백함수
 * @param {Function} props.handleToggleSort - 토글 상태를 업데이트 하는 콜백함수
 * @returns 공고 정렬 버튼
 */
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
