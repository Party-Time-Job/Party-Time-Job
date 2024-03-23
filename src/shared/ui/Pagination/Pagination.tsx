import PaginationUi from '@/shared/ui/Pagination/ui/PaginationUi';

const MAX_PAGE = 7;

/**
 *
 * @param {number} page 페이지
 * @param {number} showedItems 보여질 아이템 개수
 * @param {number} total 총 아이템 개수
 * @returns 페이지네이션
 */

const Pagination = ({
  page,
  showedItems,
  total,
}: {
  page: number;
  showedItems: number;
  total: number;
}) => {
  const currentNumber = Math.floor((page - 1) / MAX_PAGE) + 1;
  const finalNumber = Math.floor((total - 1) / showedItems) + 1;
  const currentStartNumber = Math.floor((page - 1) / MAX_PAGE) * MAX_PAGE + 1;
  const currentFinalNumber = Math.min(finalNumber, currentNumber * MAX_PAGE);
  const pageGroup = Array.from(
    { length: currentFinalNumber - currentStartNumber + 1 },
    (_, i) => i + currentStartNumber,
  );

  return (
    <PaginationUi
      page={page}
      showed={pageGroup}
      isPrevious={page > 1}
      isNext={page < finalNumber}
    />
  );
};

export default Pagination;
