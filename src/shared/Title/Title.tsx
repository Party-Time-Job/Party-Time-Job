import { TitleInterface } from '@/shared/Title/type';

const Title = ({
  title,
  align = 'start',
  size = 28,
  subtitle,
  subSize = 16,
  gap = 0,
  children,
}: TitleInterface) => {
  return (
    <div className='relative m-0 mx-auto h-full max-w-[964px] px-0 py-[60px] md:px-[12px] md:py-[40px] lg:w-full lg:max-w-none lg:px-[32px] lg:py-[60px]'>
      {subtitle && (
        <h2
          style={{ fontSize: subSize }}
          className='mb-2 text-base font-bold text-[#ea3c12]'
        >
          {subtitle}
        </h2>
      )}
      <h1
        style={{ textAlign: align, fontSize: size, marginBottom: gap }}
        className='font-bold'
      >
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Title;
