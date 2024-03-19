import { AllNotice } from '@/entities/Post/types.ts';
import { getMethod } from '@/shared/api/RequestMethod.ts';
import convertSortText from './utils/convertSortText.ts';

interface Props {
  sortCategory: string;
  updateItemList: (sortedList: AllNotice) => void;
  updateSortCategory: (sortCategory: string) => void;
  handleToggleSort: () => void;
  searchValue?: string;
  updatePageNumber: (value: number) => void;
  currentPageNumber: number;
  listCategory: string;
}
/**
 * @param {Object} props - SortButton 컴포넌트의 props
 * @param {string} props.sortCategory - 정렬 방식
 * @param {Function} props.updateItemList - 정렬된 공고 리스트로 업데이트 하는 콜백함수
 * @param {Function} props.updateSortCategory - 정렬 방식 표기를 업데이트 하는 콜백함수
 * @param {Function} props.handleToggleSort - 토글 상태를 업데이트 하는 콜백함수
 * @returns 공고 정렬 버튼
 */
const SortButton = ({
  sortCategory,
  updateItemList,
  updateSortCategory,
  handleToggleSort,
  searchValue,
  updatePageNumber,
  currentPageNumber,
  listCategory,
}: Props) => {
  // TODO: getNoticeList 함수로 통합
  const url = searchValue
    ? `https://bootcamp-api.codeit.kr/api/3-2/the-julge/notices?sort=${sortCategory}&keyword=${searchValue}&offset=0&limit=6`
    : `https://bootcamp-api.codeit.kr/api/3-2/the-julge/notices?sort=${sortCategory}&offset=0&limit=6`;

  const sortItemList = async () => {
    const newList = await getMethod<AllNotice>(url);
    return newList;
  };

  const handleSortClick = async () => {
    console.log(listCategory);
    const sortedList = await sortItemList();
    updateItemList(sortedList);
    updateSortCategory(sortCategory);
    handleToggleSort();
    if (currentPageNumber !== 1) {
      updatePageNumber(1);
    }
  };

  return (
    <button
      onClick={handleSortClick}
      className='text-center text-[14px] leading-[22px]'
    >
      {convertSortText(sortCategory)}
    </button>
  );
};

export default SortButton;
