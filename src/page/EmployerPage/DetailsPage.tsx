/* eslint-disable no-nested-ternary */
import EmptyShop from '@/entities/Employer/EmptyShop';
import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import MyShop from '@/entities/Employer/MyShop';
import EmployerNoticeList from '@/entities/Employer/EmployerNoticeList';
import { AllNotice } from '@/entities/Post/types';
import { ShopItem } from '@/features/Create-Shop/Type';

/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */

interface DetailsPageProps {
  shopInfo: ShopItem | null;
  shopId: string;
  noticeItemList: AllNotice | null;
}

const DetailsPage = ({
  shopInfo,
  shopId,
  noticeItemList,
}: DetailsPageProps) => {
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
