'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EmptyStore from '@/entities/Employer/EmptyStore';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyStore from '@/entities/Employer/MyStore';

/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */
interface DetailsPageProps {
  userType: string | null;
  userId: string | null;
  storeId: string | null;
}
interface StoreInfoProps {
  imageUrl: string | null;
  category: string | null;
  name: string | null;
  address1: string | null;
  description: string | null;
}

const DetailsPage = ({ userType, userId, storeId }: DetailsPageProps) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfoProps>({
    imageUrl: null,
    category: null,
    name: null,
    address1: null,
    description: null,
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
      const storeData = await response.json();
      console.log(storeData, '------detailsPage-----');
      console.log(storeIdParams, '------storeIdParams-----');
      setStoreInfo({
        imageUrl: storeData.item.imageUrl,
        category: storeData.item.category,
        name: storeData.item.name,
        address1: storeData.item.address1,
        description: storeData.item.description,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (storeId) {
      getStoreInfo(storeId);
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
          userId={userId}
          storeId={storeId}
          userType={userType}
        />
      ) : (
        <EmptyStore
          onClick={() =>
            handleNavigate(
              `/store/registration/store-info/${userType}?userId=${userId}&storeId=${storeId}`,
            )
          }
        />
      )}
      <EmptyRecruitment
        onClick={() =>
          handleNavigate(
            `/store/registration/recruitment/${userType}?userId=${userId}&storeId=${storeId}`,
          )
        }
      />
    </>
  );
};

export default DetailsPage;
