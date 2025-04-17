/* eslint-disable no-nested-ternary */
import EmptyShop from '@/entities/Employer/EmptyShop';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyShop from '@/entities/Employer/MyShop';
import EmployerNoticeList from '@/entities/Employer/EmployerNoticeList';
import { ShopDetailsPageProps } from './type.ts';

/**
 * 가게 상세 정보를 표시하는 컴포넌트
 *
 * @param {ShopItem | null} shopInfo - 가게의 상세 정보를 포함하는 객체 또는 null. 렌더링할 DOM 요소에 대한 정보를 제공합니다.
 * @param {string} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @param {AllNotice | null} noticeItemList - 가게 등록 공고 리스트를 포함하는 객체 또는 null. DOM에 렌더링할 공고 리스트입니다.
 * @return {JSX.Element} 가게 정보 및 공고 리스트를 렌더링하는 JSX 요소를 반환합니다.
 */

const DetailsPage = ({
  shopInfo,
  shopId,
  noticeItemList,
}: ShopDetailsPageProps) => {
  return (
    <>
      {shopInfo ? (
        <MyShop shopInfo={shopInfo} shopId={shopId} />
      ) : (
        <EmptyShop shopId={shopId} />
      )}
      {shopInfo ? (
        noticeItemList ? (
          <EmployerNoticeList
            shopId={shopId}
            shopInfo={shopInfo}
            noticeItemList={noticeItemList}
          />
        ) : (
          <div className='flex h-[420px] justify-center'>
            {shopId ? <EmptyRecruitment shopId={shopId} /> : null}
          </div>
        )
      ) : (
        <div className='h-[400px]' />
      )}
    </>
  );
};

export default DetailsPage;
