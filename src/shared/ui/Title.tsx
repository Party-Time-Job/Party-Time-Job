/**
 *
 * @param {string} title 페이지 타이틀
 * @param {'start' | 'center'} align 타이틀 정렬 (기본값은 start)
 * @param {number} size 타이틀 폰트 크기
 * @param {string} subtitle 페이지 서브타이틀
 * @param {number} subSize 서브타이틀 폰트 크기
 * @param {number} gap 타이틀과 본문 간격
 * @param {React.ReactNode} children 페이지 타이틀 밑 각 내용들
 * @returns 페이지 타이틀과 해당하는 각 내용들
 */

interface TitleInterface {
  title: string;
  align?: 'start' | 'center';
  size?: number;
  subtitle?: string;
  subSize?: number;
  gap?: number;
  children: React.ReactNode;
}

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
    <div className='px-[12px] py-[40px] md:w-full md:max-w-none md:px-[32px] md:py-[60px] lg:relative lg:m-0 lg:mx-auto lg:h-full lg:max-w-[964px] lg:px-0 lg:py-[60px]'>
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
