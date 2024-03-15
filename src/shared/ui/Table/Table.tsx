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
} from '@/shared/ui/Table/ui/TableBodyUi';

const slicePhoneNumber = (phone: string) =>
  `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;

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

export const StoreTable = ({ data, pagination, page }: StoreTableInterface) => {
  const tableData: TableInterface[] = data.map(item => ({
    id: item.id,
    status: item.status,
    name: item.name,
    firstValue: item.description,
    secondValue: item.phone && slicePhoneNumber(item.phone),
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
            <TableBodyCell>{item.firstValue}</TableBodyCell>
            <TableBodyCell>{item.secondValue}</TableBodyCell>
            {/*
            <TableBodyCell>
              {item.status === 'pending' ? (
                {
                  // 현재 상태가 진행중일 때 버튼으로 승인하기 / 거절하기 버튼만 만드시면 될 것 같습니다.
                  // 진행 상태 아니면 따로 상태 표시는 설정해 두었습니다.
                  // 정확하지는 않지만 shop, notice id 값 넘겨서 받아주면 되지 않을까 싶습니다... (정말 추측입니다..)
                }
              ) : (
                <TableBodyStatus status={item.status} />
              )}
            </TableBodyCell>
              */}
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainerUi>
  );
};
