import { Dispatch, SetStateAction } from 'react';
import { AllNotice } from '../Post/types.ts';
import getNoticeList from './utils/getNoticeList.ts';
import setPagination from './utils/setPagination.ts';

interface Props {
  count: number;
  currentPageNumber: number;
  updatePageNumber: (value: number) => void;
  setNoticeItemList: Dispatch<SetStateAction<AllNotice>>;
  sortCategory: string;
  listCategory: string;
  searchValue?: string;
  filterCondition: { address?: string[]; date?: string; pay?: string };
}

const Pagination = ({
  count,
  currentPageNumber,
  updatePageNumber,
  setNoticeItemList,
  sortCategory,
  listCategory,
  searchValue,
  filterCondition,
}: Props) => {
  const defaultPageStyle =
    'flex h-[40px] w-[40px] items-center justify-center text-white p-[12px] cursor-pointer';
  const activePageStyle = `${defaultPageStyle} rounded-[4px] bg-black border border-test-green font-blod`;

  const pageArray = setPagination(count, currentPageNumber);

  const handlePageClick = (page: number) => {
    if (page === currentPageNumber) {
      return;
    }
    updatePageNumber(page);
    const offsetNumber = page * 6 - 6;
    getNoticeList(
      setNoticeItemList,
      offsetNumber,
      sortCategory,
      listCategory,
      searchValue,
      filterCondition,
    );
  };

  return (
    <div className='mt-[70px] flex items-center justify-center'>
      <div>
        <div className='flex items-center justify-center gap-[2px]'>
          {pageArray.map(page => {
            return (
              <span
                key={page}
                onClick={() => handlePageClick(page)}
                className={
                  page === currentPageNumber
                    ? activePageStyle
                    : defaultPageStyle
                }
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
