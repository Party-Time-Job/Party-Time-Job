import SortButton from '@/features/Sort/SortButton';
import { AllNotice } from '../Post/types.ts';
import { FilterCondition } from './types.ts';

interface Props {
  updateItemList: (sortedList: AllNotice) => void;
  updateSortCategory: (sortCategory: string) => void;
  handleToggleSort: () => void;
  searchValue?: string;
  updatePageNumber: (value: number) => void;
  currentPageNumber: number;
  listCategory: string;
  filterCondition: FilterCondition;
}

/**
 * @param {Object} props - SortButtonList 컴포넌트의 props
 * @param {Function} props.updateItemList - 정렬된 공고 목록을 업데이트하는 콜백함수
 * @param {Function} props.updateSortCategory - 공고 정렬 방식 표기를 업데이트 하는 콜백함수
 * @param {Function} props.handleToggleSort - 공고 정렬 방식 선택 버튼들의 토글 상태를 업데이트 하는 콜백함수
 * @param {string} props.searchValue - 검색어
 * @param {Function} props.updatePageNumber - 페이지네이션 페이지 업데이트 콜백함수
 * @param {number} props.currentPageNumber - 현재 페이지 번호
 * @param {string} props.listCategory - 공고를 가져오는 기준 전체 or 정렬 or 필터링
 * @param {FilterCondition} props.filterCondition - 필터링 조건
 * @returns 공고 정렬 버튼 리스트
 */
const SortButtonList = ({
  updateItemList,
  updateSortCategory,
  handleToggleSort,
  searchValue,
  updatePageNumber,
  currentPageNumber,
  listCategory,
  filterCondition,
}: Props) => {
  const sortCategoryList = ['time', 'pay', 'hour', 'shop'];
  return (
    <div className='absolute top-10 z-10 flex flex-col items-start gap-[8px] rounded-[6px] border-[1px] border-solid border-pt-gray30 bg-white'>
      <div className='flex flex-col items-center self-stretch'>
        {sortCategoryList.map(sortCategory => {
          return (
            <SortButton
              key={sortCategory}
              sortCategory={sortCategory}
              updateItemList={updateItemList}
              updateSortCategory={updateSortCategory}
              handleToggleSort={handleToggleSort}
              searchValue={searchValue}
              updatePageNumber={updatePageNumber}
              currentPageNumber={currentPageNumber}
              listCategory={listCategory}
              filterCondition={filterCondition}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SortButtonList;
