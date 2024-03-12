/**
 * @param {string} title
 * 우측 상단 제목을 작성해주세요
 * @param {string} comment
 * 컴포넌트 내부에 안내 설명을 작성해주세요
 * @param {string} content
 * 버튼 이름을 작성해주세요
 */

import { ReactNode } from 'react';
import Button from '@/shared/UI/Button';

interface EmployerEmptyDataComponentProps {
  title: string;
  comment: string;
  content: string;
  button?: ReactNode;
}

const EmpolyerEmptyData = ({
  title,
  comment,
  content,
  button,
}: EmployerEmptyDataComponentProps) => {
  return (
    <div className='felx flex-col items-start gap-2 px-[237px] py-[60px]'>
      <div className='h-[275px] w-[965px]'>
        <span className='text-[28px] font-bold tracking-[0.56px] text-[#111322]'>
          {title}
        </span>
        <div className='flex w-[965px] flex-col items-center justify-center gap-6 px-6 py-[60px]'>
          <span className='self-stretch text-center font-normal leading-[26px] text-[#111322]'>
            {comment}
          </span>
          {button}
          <Button size='large' status='active' text={content} />
        </div>
      </div>
    </div>
  );
};

export default EmpolyerEmptyData;
