/* eslint-disable consistent-return */
import { Status } from '@/shared/ui/Table/type';

export const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

export const TableBodyRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

export const TableBodyCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <td>
      <div>{children}</div>
    </td>
  );
};

export const TableBodyStatus = ({ status }: { status: Status }) => {
  switch (status) {
    case 'pending':
      return <div>대기중</div>;
    case 'accepted':
      return <div>승인완료</div>;
    case 'rejected':
      return <div>거절</div>;
    case 'canceled':
      return <div>취소</div>;
    default:
  }
};
