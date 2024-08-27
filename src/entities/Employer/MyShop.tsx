'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/shared/ui/Button';
import { ShopInfo } from './type.ts';

interface GetMyShopProps {
  shopInfo: ShopInfo;
  shopId: string | null;
}

const MyShop = ({ shopInfo, shopId }: GetMyShopProps) => {
  const router = useRouter();
  const handleClick = (action: 'edit' | 'register') => {
    const routes = {
      edit: `/shop/registration/shop-info/edit?shopId=${shopId}`,
      register: `/shop/registration/recruitment/regist?shopId=${shopId}&noticeId=`,
    };
    router.push(routes[action]);
  };
  const { imageUrl, category, name, address1, description } = shopInfo;
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-2'>
      <div className='mx-12 flex flex-col gap-[23px]'>
        <span className='flex h-12 w-24 items-center justify-center rounded-lg bg-test-blue text-xl font-bold text-black'>
          내 가게
        </span>
        <div className='flex-col items-start justify-between gap-6 rounded-xl bg-test-black p-6 sm:flex sm:flex-row'>
          {/* 상호 이미지 */}
          <div className='flex h-[346px] items-center justify-center rounded-xl'>
            <div className='relative flex h-full w-[346px] items-center justify-center overflow-hidden rounded-xl'>
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
          <div className='flex w-[346px] flex-col items-start justify-between self-stretch pt-4'>
            <div className='flex w-[346px] flex-col items-start gap-3 '>
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
              <div className='h-32 overflow-auto leading-[26px] scrollbar-hide'>
                {description}
              </div>
            </div>
            {/* 버튼 목록 */}
            <div className='flex items-center gap-3'>
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
