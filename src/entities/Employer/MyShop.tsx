'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/shared/ui/Button';
import { GetMyShopProps } from './type.ts';

/**
 * 가게 상세 정보를 표시하는 컴포넌트
 *
 * 편집하기 & 공고 등록하기 버튼의 이벤트핸들러는 인자로 전달받은 action을 통해 분기처리됩니다.
 *
 * @param {ShopItem} shopInfo - 가게의 상세 정보를 포함하는 객체. 렌더링할 DOM 요소에 대한 정보를 제공합니다.
 * @param {string | null} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @return {JSX.Element} 가게 정보를 렌더링하는 JSX 요소를 반환합니다.
 */

const MyShop = ({ shopInfo, shopId }: GetMyShopProps) => {
  const router = useRouter();
  const handleClick = (action: 'edit' | 'register') => {
    const routes = {
      edit: `/shop/registration/shop-info/${shopId}`,
      register: `/shop/registration/recruitment/regist?shopId=${shopId}&noticeId=`,
    };
    router.push(routes[action]);
  };
  const { imageUrl, category, name, address1, description } = shopInfo;
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-4'>
      <div className='mx-12 flex flex-col gap-[23px] md:w-[670px]'>
        <span className='flex h-12 w-24 items-center justify-center rounded-lg bg-test-blue text-xl font-bold text-black'>
          내 가게
        </span>
        <div className='flex flex-col items-start justify-between gap-6 rounded-xl bg-test-black p-3 md:flex md:flex-row md:p-6'>
          {/* 상호 이미지 */}
          <div className='flex h-[346px] items-center justify-center rounded-xl'>
            <div className='relative flex h-full w-[346px] items-center justify-center overflow-hidden rounded-xl bg-[#141414]'>
              <Image
                priority
                width={0}
                height={0}
                sizes='100vw '
                src={imageUrl}
                alt='preview-image'
                className='rounded-xl'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
          <div className='flex flex-col items-start justify-between gap-3 self-stretch'>
            <div className='flex w-full flex-col items-start gap-5'>
              {/* 분류, 상호명 */}
              <div className='flex flex-col items-start gap-2'>
                <div className='rounded-lg border border-test-blue bg-test-blue px-3 py-1 text-sm font-bold leading-5 text-black'>
                  {category}
                </div>
                <div className='text-[28px] font-bold tracking-[0.56px]'>
                  {name}
                </div>
              </div>
              {/* 점포 위치 */}
              <div className='flex items-center gap-[6px]'>
                <Image src='/location-icon.svg' alt='' width={20} height={20} />
                <div className='leading-[26px]'>{address1}</div>
              </div>
              {/* 설명 */}
              <div className='h-36 self-stretch overflow-auto rounded-md bg-[#141414] p-2 leading-[26px] scrollbar-hide'>
                {description}
              </div>
            </div>
            {/* 버튼 목록 */}
            <div className='flex w-full justify-end gap-2'>
              <Button
                status='active'
                size='medium'
                type='button'
                text='편집하기'
                onClick={() => handleClick('edit')}
              />
              <Button
                status='active'
                size='medium'
                type='submit'
                text='공고 등록하기'
                onClick={() => handleClick('register')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShop;
