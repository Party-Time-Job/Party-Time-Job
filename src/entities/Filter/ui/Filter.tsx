import Image from 'next/image';
import Input from '@/shared/ui/Input';

const Filter = () => {
  return (
    <div className='flex w-[390px] flex-col items-start gap-6 rounded-[10px] border border-solid border-[color:var(--The-julge-gray-20,#E5E4E7)] px-5 py-6 shadow-[0px_2px_8px_0px_rgba(120,116,134,0.25)]'>
      <div className='flex items-center justify-between self-stretch'>
        <span className='text-xl font-bold leading-normal text-[#111322] '>
          상세필터
        </span>
        <Image src='/close.svg' alt='close' width='24' height='24' />
      </div>
      <div className='flex flex-col items-start gap-10'>
        <div className='flex w-[350px] flex-col items-start gap-6'>
          <div className='flex flex-col items-start gap-3'>
            <span className='text-base font-normal leading-[26px] text-[#111322] '>
              위치
            </span>
            <div className='h-[258px] w-[350px] rounded-md border-solid border-[#E5E4E7] bg-white'>
              <div className='inline-flex flex-col items-start gap-5 '>
                [주소 불러와서 뿌려주기]
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              [주소 누르면 주소 추가]
            </div>
          </div>
          <div className='h-0.5 self-stretch bg-[#F2F2F3]'></div>
          <div className='flex items-start gap-3 self-stretch'>
            <div className='flex flex-[1_0_0] flex-col items-start gap-2'>
              <span>시작일</span>
              <Input></Input>
            </div>
          </div>
          <div className='h-0.5 self-stretch bg-[#F2F2F3]'></div>
          <div className='flex w-[350px] flex-col items-center justify-end gap-2'></div>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Filter;
