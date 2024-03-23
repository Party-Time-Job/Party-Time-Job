'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EmptyStore from '@/entities/Employer/EmptyStore';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyStore from '@/entities/Employer/MyStore';
import { StoreData, StoreItem } from '@/features/Create-Store/Type';
import EmployerNoticeList from '@/entities/Employer/EmployerNoticeList';
import { AllNotice } from '@/entities/Post/types';

/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */
interface DetailsPageProps {
  storeId: string;
}
interface StoreInfoProps {
  imageUrl: string;
  category: string;
  name: string;
  address1: string;
  description: string;
  originalHourlyPay: string;
}

const DetailsPage = ({ storeId }: DetailsPageProps) => {
  const [hasNotice, setNotice] = useState<boolean>(false);
  const [noticeItemList, setNoticeItemList] = useState<AllNotice>({
    offset: 0,
    limit: 0,
    address: [],
    count: 0,
    hasNext: false,
    items: [],
    links: [],
  });
  const [storeInfo, setStoreInfo] = useState<StoreInfoProps>({
    imageUrl: '',
    category: '',
    name: '',
    address1: '',
    description: '',
    originalHourlyPay: '',
  });

  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.push(route);
  };
  const getStoreInfo = async (storeIdParams: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeIdParams}`,
      );
      const storeData: StoreData = await response.json();
      const { item }: { item: StoreItem } = storeData;
      const {
        imageUrl,
        category,
        name,
        address1,
        description,
        originalHourlyPay,
      } = item;
      setStoreInfo({
        imageUrl,
        category,
        name,
        address1,
        description,
        originalHourlyPay,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getStoreNotice = async (storeIdParams: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeIdParams}/notices`,
      );
      const result = await response.json();
      if (result.count) {
        setNotice(!hasNotice);
        setNoticeItemList(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (storeId) {
      getStoreInfo(storeId);
      getStoreNotice(storeId);
    }
  }, [storeId]);
  return (
    <>
      {storeId ? (
        <MyStore
          imageUrl={storeInfo.imageUrl}
          category={storeInfo.category}
          name={storeInfo.name}
          address1={storeInfo.address1}
          description={storeInfo.description}
          storeId={storeId}
        />
      ) : (
        <EmptyStore
          onClick={() =>
            handleNavigate(`/store/registration/store-info/${storeId}`)
          }
        />
      )}
      {hasNotice ? (
        <EmployerNoticeList
          shopId={storeId}
          imageUrl={storeInfo.imageUrl}
          noticeItemList={noticeItemList}
          originalHourlyPay={storeInfo.originalHourlyPay}
          name={storeInfo.name}
          address1={storeInfo.address1}
        />
      ) : (
        <EmptyRecruitment
          onClick={() =>
            handleNavigate(
              `/store/registration/recruitment/new?storeId=${storeId}`,
            )
          }
        />
      )}
    </>
  );
};

export default DetailsPage;
