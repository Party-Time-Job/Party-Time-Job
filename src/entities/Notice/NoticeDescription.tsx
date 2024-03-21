import { Notice } from '../Post/types.ts';

const NoticeDescription = ({ detail }: { detail: Notice }) => {
  return (
    <div className='flex flex-col items-start gap-2 rounded-xl bg-pt-gray20 p-[20px] lg:p-[32px]'>
      <span className='text-[14px] font-bold md:text-[16px] md:leading-[20px]'>
        공고 설명
      </span>
      <p className='text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]'>
        {detail?.item.description}
      </p>
    </div>
  );
};

export default NoticeDescription;
