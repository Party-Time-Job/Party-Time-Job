import Text from '@/shared/ui/Text';

interface Props {
  category: string | undefined;
  searchValue: string | undefined;
}

const NoticeCategory = ({ category, searchValue }: Props) => {
  if (category === 'all') {
    return (
      <div className='flex h-10 w-28 items-center justify-center rounded-lg bg-test-green text-black'>
        <Text as='span' className='font-bold'>
          전체공고
        </Text>
      </div>
    );
  }
  if (category === 'recent') {
    return (
      <span className='text-[20px] font-bold leading-6 text-test-green md:text-[28px]'>
        최근에 본 공고
      </span>
    );
  }
  if (category === 'search') {
    return (
      <span className='text-[20px] font-medium leading-6 text-test-green md:text-[28px]'>
        <span className='font-bold text-test-blue'>{searchValue}</span> 에 대한
        공고 목록
      </span>
    );
  }
  return null;
};

export default NoticeCategory;
