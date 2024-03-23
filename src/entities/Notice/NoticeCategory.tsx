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
      <div className='flex h-10 w-28 items-center justify-center rounded-lg bg-test-green text-black'>
        <Text as='span' className='font-bold'>
          최근에 본 공고
        </Text>
      </div>
    );
  }
  if (category === 'search') {
    return (
      <div className='flex gap-2'>
        <span className='flex h-10 w-28 items-center justify-center rounded-lg bg-test-blue text-lg font-bold text-black'>
          {searchValue}
        </span>{' '}
        <span className='flex items-end font-bold text-test-blue'>
          검색 결과
        </span>
      </div>
    );
  }
  return null;
};

export default NoticeCategory;
