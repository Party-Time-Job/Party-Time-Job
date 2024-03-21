interface Props {
  category: string | undefined;
  searchValue: string | undefined;
}

const NoticeCategory = ({ category, searchValue }: Props) => {
  if (category === 'all') {
    return (
      <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
        전체 공고
      </span>
    );
  }
  if (category === 'recent') {
    return (
      <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
        최근에 본 공고
      </span>
    );
  }
  if (category === 'search') {
    return (
      <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
        <span className='text-pt-green30'>{searchValue}</span>에 대한 공고 목록
      </span>
    );
  }
  return null;
};

export default NoticeCategory;
