import formatTime from '@/shared/utils/formatTime';
import {
  ProfileTableInterface,
  StoreTableInterface,
  TableInterface,
} from '@/shared/ui/Table/type';
import NoTableUi from '@/shared/ui/Table/ui/NoTableUi';
import TableContainerUi from '@/shared/ui/Table/ui/TableContainerUi';
import { TableHeadCell, TableHeadRow } from '@/shared/ui/Table/ui/TableHeadUi';
import {
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableBodyStatus,
} from '@/shared/ui/Table/ui/TableBodyUi';

/**
 *
 * @param {ProfileInterface[]} data 프로필 테이블에 필요한 데이터 -> @/shared/ui/Table/type에서 ProfileInterface 타입 참고
 * @param {ReactNode} pagination 페이지네이션(아직 미구현)
 * @returns 프로필 페이지 내 테이블 컴포넌트
 */

export const ProfileTable = ({ data, pagination }: ProfileTableInterface) => {
  const tableData: TableInterface[] = data.map(item => ({
    id: item.id,
    status: item.status,
    name: item.name,
    firstValue: formatTime(item.startsAt, item.workhour),
    secondValue: `${item.hourlyPay.toLocaleString()}원`,
  }));

  if (!(tableData.length > 0)) return <NoTableUi userType='employee' />;
  return (
    <TableContainerUi pagination={pagination}>
      <TableHeadRow>
        <TableHeadCell>가게</TableHeadCell>
        <TableHeadCell>일자</TableHeadCell>
        <TableHeadCell>시급</TableHeadCell>
        <TableHeadCell>상태</TableHeadCell>
      </TableHeadRow>
      <TableBody>
        {tableData.map(item => (
          <TableBodyRow key={item.id}>
            <TableBodyCell>{item.name}</TableBodyCell>
            <TableBodyCell>{item.firstValue}</TableBodyCell>
            <TableBodyCell>{item.secondValue}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainerUi>
  );
};

/**
 *
 * @param {StoreInterface[]} data 가게 공고 상세 테이블에 필요한 데이터 -> @/shared/ui/Table/type에서 StoreInterface 타입 참고
 * @param {ReactNode} pagination 페이지네이션(아직 미구현)
 * @returns 가게 공고 상세 페이지 내 테이블 컴포넌트
 */

export const StoreTable = ({ data, pagination, page }: StoreTableInterface) => {
  const tableData: TableInterface[] = data.map(item => ({
    id: item.id,
    status: item.status,
    name: item.name,
    bio: item.bio,
    secondValue: item.phone,
  }));

  if (!(tableData.length > 0)) {
    return <NoTableUi userType='employer' message={page !== 1} />;
  }

  return (
    <TableContainerUi pagination={pagination}>
      <TableHeadRow>
        <TableHeadCell>신청자</TableHeadCell>
        <TableHeadCell>소개</TableHeadCell>
        <TableHeadCell>전화번호</TableHeadCell>
        <TableHeadCell>상태</TableHeadCell>
      </TableHeadRow>
      <TableBody>
        {tableData.map(item => (
          <TableBodyRow key={item.id}>
            <TableBodyCell>{item.name}</TableBodyCell>
            <TableBodyCell>{item.bio}</TableBodyCell>
            <TableBodyCell>{item.secondValue}</TableBodyCell>

            <TableBodyCell>
              {item.status === 'pending' ? (
                <>
                  <button>거절하기</button>
                  <button>승인하기</button>
                </>
              ) : (
                <TableBodyStatus status={item.status} />
              )}
            </TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainerUi>
  );
};
