/**
 * @위치 서버로부터 데이터를 받아와서 나열해주면 됩니다.
 * @클릭이벤트 위치를 클릭하면 위치가 push 되는 이벤트를 추가해줘야합니다.
 * @필요한_ui 위치 데이터를 불러오면 보이는 데이터들을 나열하는 Ui 처리를 해놓지 않았습니다
 */

import Image from 'next/image';

import Input from '@/shared/ui/Input';
import Button from '@/shared/Button';

const Filter = () => {
  return (
    <div className='flex w-[390px] flex-col items-start gap-6 rounded-[10px] border border-solid border-[color:var(--The-julge-gray-20,#E5E4E7)] px-5 py-6 shadow-[0px_2px_8px_0px_rgba(120,116,134,0.25)]'>
      <div className='flex items-center justify-between self-stretch'>
        <span className='text-xl font-bold leading-normal text-[#111322] '>
          상세필터
        </span>
        <Image src={'/filter-close.svg'} alt='close' width='24' height='24' />
      </div>
      <div className='flex flex-col items-start gap-10'>
        <div className='flex w-[350px] flex-col items-start gap-6'>
          <div className='flex flex-col items-start gap-3'>
            <span className='text-base font-normal leading-[26px] text-[#111322]'>
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
              <span className='text-base font-normal leading-[26px] text-[#111322]'>
                시작일
              </span>
              <Input
                className='flex items-start gap-[10px] self-stretch px-4 py-5'
                placeholder='입력'
                type='date'
              ></Input>
            </div>
          </div>
          <div className='h-0.5 self-stretch bg-[#F2F2F3]'></div>
          <div className='flex w-[350px] flex-col items-start justify-end gap-2'>
            <span className='flex items-start gap-[10px] self-stretch px-4 py-5'>
              금액
            </span>
            <div className='flex items-center justify-start gap-3'>
              <div className='relative inline'>
                <Input width='w-[169px]' placeholder='입력' />
                <span className='absolute right-4 top-5'>원</span>
              </div>
              <span>이상부터</span>
            </div>
          </div>
        </div>
        <div className='flex w-[100%] justify-end gap-1'>
          <Button status='active' size='medium' text='초기화' />
          <Button status='active' size='medium' text='적용하기' />
        </div>
      </div>
    </div>
  );
};

export default Filter;
