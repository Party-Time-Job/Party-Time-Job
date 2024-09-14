/* eslint-disable no-nested-ternary */
import EmptyShop from '@/entities/Employer/EmptyShop';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyShop from '@/entities/Employer/MyShop';
import EmployerNoticeList from '@/entities/Employer/EmployerNoticeList';
import { ShopDetailsPageProps } from './type.ts';

/**
 * @param {ShopItem | null} shopInfo - 렌더링 대상 DOM 요소의 id
 * @param {string} shopId - 외부 DOM에 렌더링할 요소
 * @param {AllNotice | null} noticeItemList - DOM에 렌더링할 요소
 * @return 가게 정보 및 가게 등록 공고 리스트
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
        ''
      )}
    </>
  );
};

export default DetailsPage;
