interface Props {
  count: number;
  currentPageNumber: number;
  updatePageNumber: (value: number) => void;
}

const Pagination = ({ count, currentPageNumber, updatePageNumber }: Props) => {
  const defaultPageStyle =
    'flex h-[40px] w-[40px] items-center justify-center p-[12px] cursor-pointer';
  const activePageStyle = `${defaultPageStyle} rounded-[4px] bg-pt-primary text-white`;

  const pageArray = [];
  let startPage;
  let endPage;

  if (count % 6 !== 0) {
    const quotient = Math.floor(count / 6) + 1;
    startPage = Math.min(
      Math.max(1, currentPageNumber - Math.floor(6 / 2)),
      quotient - 6 + 1,
    );
    endPage = Math.min(startPage + 6, quotient);
  } else {
    const quotient = count / 6;
    startPage = Math.min(
      Math.max(1, currentPageNumber - Math.floor(6 / 2) + 1),
      quotient - 6 + 1,
    );
    endPage = Math.min(startPage + 6, quotient);
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pageArray.push(i);
  }

  const handlePageClick = (page: number) => {
    updatePageNumber(page);
    console.log('페이지 이동', page);
  };

  return (
    <div className='mt-[40px] flex items-center justify-center'>
      <div>
        <div className='flex items-start items-center justify-center gap-[2px]'>
          {pageArray.map(page => {
            return (
              <span
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
