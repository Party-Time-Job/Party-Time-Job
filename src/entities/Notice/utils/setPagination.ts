const setPagination = (count: number, currentPageNumber: number) => {
  const pageArray = [];
  let startPage;
  let endPage;

  if (count % 6 !== 0) {
    const quotient = Math.floor(count / 6) + 1;
    startPage = Math.max(
      1,
      Math.min(currentPageNumber - Math.floor(6 / 2), quotient - 6 + 1),
    );
    endPage = Math.min(startPage + 6 - 1, quotient);
  } else {
    const quotient = count / 6;
    startPage = Math.max(
      1,
      Math.min(currentPageNumber - Math.floor(6 / 2) + 1, quotient - 6 + 1),
    );
    endPage = Math.min(startPage + 6 - 1, quotient);
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pageArray.push(i);
  }
  return pageArray;
};
export default setPagination;
