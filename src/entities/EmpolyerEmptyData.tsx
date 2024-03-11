import Button from '@/shared/UI/Button';

interface EmployerEmptyDataComponentProps {
  title: string;
  comment: string;
  content: string;
}

const EmpolyerEmptyData = ({
  title,
  comment,
  content,
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
          <Button type='active'>{content}</Button>
        </div>
      </div>
    </div>
  );
};

export default EmpolyerEmptyData;
