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
}

const Pagination = ({
  count,
  currentPageNumber,
  updatePageNumber,
  setNoticeItemList,
  sortCategory,
}: Props) => {
  const defaultPageStyle =
    'flex h-[40px] w-[40px] items-center justify-center p-[12px] cursor-pointer';
  const activePageStyle = `${defaultPageStyle} rounded-[4px] bg-pt-primary text-white`;

  const pageArray = setPagination(count, currentPageNumber);

  const handlePageClick = (page: number) => {
    if (page === currentPageNumber) {
      return;
    }
    updatePageNumber(page);
    const offsetNumber = page * 6 - 6;
    getNoticeList(setNoticeItemList, offsetNumber, sortCategory);
  };

  return (
    <div className='mt-[40px] flex items-center justify-center'>
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
