/* eslint-disable consistent-return */
import { Status } from '@/shared/ui/Table/type';

export const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

export const TableBodyRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className='border-b border-b-[#cbc9cf] text-base font-normal md:text-sm md:font-normal'>
      {children}
    </tr>
  );
};

export const TableBodyCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className='px-3 py-5 align-middle md:px-2 md:py-[9px]'>
      <div className='hidden-webkit flex flex-row items-center justify-start gap-3 md:gap-2'>
        {children}
      </div>
    </td>
  );
};

export const TableBodyStatus = ({ status }: { status: Status }) => {
  switch (status) {
    case 'pending':
      return (
        <div className='text-[#20a81e w-fit rounded-[20px] bg-[#d4f7d4] px-2.5 py-1.5 text-xs font-normal'>
          대기중
        </div>
      );
    case 'accepted':
      return (
        <div className='w-fit rounded-[20px] bg-[#cce6ff] px-2.5 py-1.5 text-xs font-normal text-[#0080ff]'>
          승인완료
        </div>
      );
    case 'rejected':
      return (
        <div className='w-fit rounded-[20px] bg-[#ffebe7;] px-2.5 py-1.5 text-xs font-normal text-[#ff4040]'>
          거절
        </div>
      );
    case 'canceled':
      return (
        <div className='w-fit rounded-[20px] bg-[#ffebe7;] px-2.5 py-1.5 text-xs font-normal text-[#ff4040]'>
          취소
        </div>
      );
    default:
  }
};
