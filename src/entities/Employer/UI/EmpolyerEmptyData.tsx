/**
 * @param {string} title
 * 우측 상단 제목을 작성해주세요
 * @param {string} comment
 * 컴포넌트 내부에 안내 설명을 작성해주세요
 * @param {string} content
 * 버튼 이름을 작성해주세요
 */

import { ReactNode } from 'react';
import Button from '@/shared/ui/Button';

interface EmployerEmptyDataComponentProps {
  title: string;
  comment: string;
  content: string;
  button?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const EmpolyerEmptyData = ({
  title,
  comment,
  content,
  button,
  onClick,
}: EmployerEmptyDataComponentProps) => {
  return (
    <div className='mx-auto flex w-[350px] flex-col md:w-[600px] lg:w-[980px]'>
      <div className='mb-4 flex'>
        <span className='flex h-12 w-24 items-center justify-center rounded-lg bg-test-green text-base font-bold text-black'>
          {title}
        </span>
      </div>
      <div className='mb-10 flex flex-col items-center justify-center gap-6 rounded-xl bg-test-black px-6 py-[60px]'>
        <span className='self-stretch text-center font-normal leading-[26px] text-white'>
          {comment}
        </span>
        {button}
        <Button
          onClick={onClick}
          size='medium'
          status='active'
          text={content}
        />
      </div>
    </div>
  );
};

export default EmpolyerEmptyData;
