import Image from 'next/image';
import Button from '@/shared/ui/Button';

interface GetMyStoreProps {
  imageUrl: string | null;
  category: string | null;
  name: string | null;
  address1: string | null;
  description: string | null;
}

const MyStore = ({
  imageUrl,
  category,
  name,
  address1,
  description,
}: GetMyStoreProps) => {
  return (
    <div className='flex h-[540px] flex-col items-center justify-center gap-2'>
      <div className='flex w-[965px] flex-col gap-[23px]'>
        <span className='text-[28px] font-bold tracking-[0.56px] text-[#111322]'>
          내 가게
        </span>
        <div className='inline-flex items-start justify-between gap-6 rounded-xl bg-slate-300 p-6'>
          {/* 상호 이미지 */}
          <div className='flex h-[346px] w-full items-center justify-center rounded-xl bg-red-300'>
            <div className='relative h-full w-full overflow-hidden rounded-xl'>
              <Image fill src={`/${imageUrl}` || ''} alt={name || ''} />
            </div>
          </div>
          <div className='flex w-[346px] flex-col items-start justify-between self-stretch pt-4'>
            <div className='flex w-[346px] flex-col items-start gap-3 '>
              {/* 분류, 상호명 */}
              <div className='flex flex-col items-start gap-2'>
                <div className='font-bold leading-5 text-[#EA3C12]'>
                  {category}
                </div>
                <div className='text-[28px] font-bold tracking-[0.56px] text-[#111322]'>
                  {name}
                </div>
              </div>
              {/* 점포 위치 */}
              <div className='flex items-center gap-[6px]'>
                <Image src='/location-icon.svg' alt='' width={20} height={20} />
                <div className='leading-[26px] text-[#7D7986]'>{address1}</div>
              </div>
              {/* 설명 */}
              <div className='leading-[26px] text-[#000]'>{description}</div>
            </div>
            {/* 버튼 목록 */}
            <div className='flex items-start justify-around gap-2 self-stretch'>
              <Button
                status='active'
                size='medium'
                type='button'
                text='편집하기'
              />
              <Button
                status='active'
                size='medium'
                type='submit'
                text='공고 등록하기'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStore;
