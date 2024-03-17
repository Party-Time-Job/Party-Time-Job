import PaginationUi from '@/shared/ui/Pagination/ui/PaginationUi';

const MAX_PAGE = 7;

const Pagination = ({
  page,
  showedItems,
  total,
}: {
  page: number;
  showedItems: number;
  total: number;
}) => {
  // 현재 페이지가 속한 그룹 변수
  const currentNumber = Math.floor((page - 1) / MAX_PAGE) + 1;
  // 마지막 페이지 번호
  const finalNumber = Math.floor((total - 1) / showedItems) + 1;
  // 현재 그룹에서 보여지는 시작과 끝
  const currentStartNumber = Math.floor((page - 1) / MAX_PAGE) * MAX_PAGE + 1;
  const currentFinalNumber = Math.min(finalNumber, currentNumber * MAX_PAGE);
  // 현재 보여지는 그룹 -> 배열 형태로 저장
  // 값 필요 X
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
