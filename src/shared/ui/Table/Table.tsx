'use client';

import { useState } from 'react';
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
import RejectModal from '@/features/RejectModal/RejectModal';
import AcceptModal from '@/features/AcceptModal/AcceptModal';
import EmpolyerEmptyData from '@/entities/Employer/UI/EmpolyerEmptyData';

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
            <TableBodyCell>
              <TableBodyStatus status={item.status} />
            </TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainerUi>
  );
};

/**
 *
 * @param {StoreInterface[]} data 가게 공고 상세 테이블에 필요한 데이터
 * @param {ReactNode} pagination 페이지네이션
 * @returns 가게 공고 상세 페이지 내 테이블 컴포넌트
 */

export const StoreTable = ({
  data,
  pagination,
  rejectedNotice,
  acceptedNotice,
}: StoreTableInterface) => {
  const tableData: TableInterface[] = data.map(item => ({
    id: item.id,
    status: item.status,
    name: item.name,
    bio: item.bio,
    secondValue: item.phone,
  }));

  const [modalCategory, setModalCategory] = useState('');

  const [selectedAplicationId, setSelectedAplicationId] = useState<
    string | null
  >(null);
  const [isAcceptToggle, setIsAcceptToggle] = useState(false);
  const [isRejectToggle, setIsRejectToggle] = useState(false);

  const handleRejectedStateToggle = () => {
    setIsRejectToggle(prev => !prev);
  };

  const handleAcceptStateToggle = () => {
    setIsAcceptToggle(prev => !prev);
  };

  const handleAcceptToggle = (newApplicationId: string) => {
    setModalCategory('accept');
    setSelectedAplicationId(newApplicationId);
    setIsAcceptToggle(prev => !prev);
  };

  const handleRejectToggle = (newApplicationId: string) => {
    setModalCategory('reject');
    setSelectedAplicationId(newApplicationId);
    setIsRejectToggle(prev => !prev);
  };

  const rejectClick = () => {
    if (selectedAplicationId) {
      rejectedNotice(selectedAplicationId);
    }
  };

  const acceptClick = () => {
    if (selectedAplicationId) {
      acceptedNotice(selectedAplicationId);
    }
  };

  return (
    <>
      {data.length ? (
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
                    <div className='flex gap-2 text-xs'>
                      <button
                        className='rounded-lg border border-red-600 px-2 py-1 text-red-600'
                        onClick={() => handleRejectToggle(item.id)}
                      >
                        거절하기
                      </button>
                      <button
                        className='rounded-lg border border-blue-600 px-2 py-1 text-blue-600'
                        onClick={() => handleAcceptToggle(item.id)}
                      >
                        승인하기
                      </button>
                    </div>
                  ) : (
                    <TableBodyStatus status={item.status} />
                  )}
                </TableBodyCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableContainerUi>
      ) : (
        <EmpolyerEmptyData
          title='신청자 목록'
          comment='아직 아무도 지원하지 않았어요. 😭'
        />
      )}

      {isRejectToggle ? (
        <RejectModal
          handleToggle={handleRejectedStateToggle}
          category={modalCategory}
          rejectClick={rejectClick}
        />
      ) : null}
      {isAcceptToggle ? (
        <AcceptModal
          handleToggle={handleAcceptStateToggle}
          category={modalCategory}
          acceptClick={acceptClick}
        />
      ) : null}
    </>
  );
};
