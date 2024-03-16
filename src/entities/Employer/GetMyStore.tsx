import Image from 'next/image';

const GetMyStore = () => {
  return (
    <div className='inline-flex items-start justify-between p-6'>
      <div className='flex items-center justify-center'></div>
      <div className='felx w-[346px] flex-col items-start justify-between self-stretch pt-4 '>
        <div className='flex w-[346px] flex-col items-start gap-3'>
          {/* 분류, 상호명 */}
          <div className='flex flex-col items-start gap-2'>
            <div className='font-bold leading-5 text-[#EA3C12]'></div>
            <div className='text-[28px] font-bold tracking-[0.56px] text-[#111322]'></div>
          </div>
          {/* 점포 위치 */}
          <div className='flex items-center gap-[6px]'>
            <Image src={} alt='' width={} height={} />
            <div></div>
          </div>
          {/* 설명 */}
          <div className='leading-[26px] text-[#000]'></div>
        </div>
        {/* 버튼 목록 */}
        <div className='flex items-start gap-2 self-stretch'></div>
      </div>
    </div>
  );
};

export default GetMyStore;
