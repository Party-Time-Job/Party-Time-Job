interface Props {
  count: number;
  currentPageNumber: number;
  updatePageNumber: (value: number) => void;
}

const Pagination = ({ count, currentPageNumber, updatePageNumber }: Props) => {
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

  return (
    <div>
      <div>
        {pageArray.map(page => {
          return <span onClick={() => updatePageNumber(page)}>{page}</span>;
        })}
      </div>
    </div>
  );
};

export default Pagination;
