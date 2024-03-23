'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EmptyShop from '@/entities/Employer/EmptyShop';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyShop from '@/entities/Employer/MyShop';
import { ShopData, ShopItem } from '@/features/Create-Shop/Type';
import EmployerNoticeList from '@/entities/Employer/EmployerNoticeList';
import { AllNotice } from '@/entities/Post/types';

/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */
interface DetailsPageProps {
  shopId: string;
}
interface ShopInfoProps {
  imageUrl: string;
  category: string;
  name: string;
  address1: string;
  description: string;
  originalHourlyPay: string;
}

const DetailsPage = ({ shopId }: DetailsPageProps) => {
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
  const [shopInfo, setShopInfo] = useState<ShopInfoProps>({
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
  const getShopInfo = async (shopIdParams: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}`,
      );
      const shopData = (await response.json()) as ShopData;
      const { item }: { item: ShopItem } = shopData;
      const {
        imageUrl,
        category,
        name,
        address1,
        description,
        originalHourlyPay,
      } = item;
      setShopInfo({
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
  const getShopNotice = async (shopIdParams: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}/notices`,
      );
      const result: AllNotice = (await response.json()) as AllNotice;
      if (result.count) {
        setNotice(!hasNotice);
        setNoticeItemList(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (shopId) {
      getShopInfo(shopId);
      getShopNotice(shopId);
    }
  }, [shopId]);
  return (
    <>
      {shopId ? (
        <MyShop
          imageUrl={shopInfo.imageUrl}
          category={shopInfo.category}
          name={shopInfo.name}
          address1={shopInfo.address1}
          description={shopInfo.description}
          shopId={shopId}
        />
      ) : (
        <EmptyShop
          onClick={() =>
            handleNavigate(`/shop/registration/shop-info/new?shopId=${shopId}`)
          }
        />
      )}
      {hasNotice ? (
        <EmployerNoticeList
          shopId={shopId}
          imageUrl={shopInfo.imageUrl}
          noticeItemList={noticeItemList}
          originalHourlyPay={shopInfo.originalHourlyPay}
          name={shopInfo.name}
          address1={shopInfo.address1}
        />
      ) : (
        <EmptyRecruitment
          onClick={() =>
            handleNavigate(
              `/shop/registration/recruitment/new?shopId=${shopId}`,
            )
          }
        />
      )}
    </>
  );
};

export default DetailsPage;
