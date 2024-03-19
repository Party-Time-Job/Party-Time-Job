'use client';

import { useEffect, useState } from 'react';
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
import getUserToken from '@/pages/NoticeDetailPage/utils/getUserToken';
import { getMethod } from '@/shared/api/RequestMethod';
import { AllApply } from '@/entities/Post/types';
import RejectModal from '@/features/RejectModal/RejectModal';
import AcceptModal from '@/features/AcceptModal/AcceptModal';

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

export const StoreTable = ({
  data,
  pagination,
  shopId,
  noticeId,
}: StoreTableInterface) => {
  const tableData: TableInterface[] = data.map(item => ({
    id: item.id,
    status: item.status,
    name: item.name,
    bio: item.bio,
    secondValue: item.phone,
  }));

  const [applicationId, setApplicationId] = useState<string>('');
  const token = getUserToken();

  const [isToggle, setIsToggle] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const [isAcceptToggle, setIsAcceptToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(prev => !prev);
  };

  const handleAcceptStateToggle = () => {
    setIsAcceptToggle(prev => !prev);
  };

  const handleAcceptToggle = () => {
    setModalCategory('accept');
    setIsAcceptToggle(prev => !prev);
  };

  const handleRejectToggle = () => {
    setModalCategory('reject');
    setIsToggle(prev => !prev);
  };

  useEffect(() => {
    const testUserApplyList = async () => {
      const response = await getMethod<AllApply>(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
      );
      const userApply = response.items;

      if (userApply.length !== 0) {
        setApplicationId(userApply[0].item.id);
      }
    };
    testUserApplyList();
  }, []);

  const rejectedNotice = async () => {
    await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'rejected' }),
      },
    );
    window.location.reload();
  };

  const rejectClick = () => {
    rejectedNotice();
  };

  const acceptedNotice = async () => {
    await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'accepted' }),
      },
    );
    window.location.reload();
  };

  const acceptClick = () => {
    acceptedNotice();
  };

  return (
    <>
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
                    <button onClick={handleRejectToggle}>거절하기</button>
                    <button onClick={handleAcceptToggle}>승인하기</button>
                  </>
                ) : (
                  <TableBodyStatus status={item.status} />
                )}
              </TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </TableContainerUi>
      {isToggle ? (
        <RejectModal
          handleToggle={handleToggle}
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
