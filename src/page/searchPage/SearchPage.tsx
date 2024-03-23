import NoticeList from '@/entities/Notice/NoticeList';

/**
 *
 * @param {string} keyword 검색어
 * @returns 검색어에 해당하는 공고 리스트
 */
const SearchPage = async ({ keyword }: { keyword: string }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <NoticeList category='search' searchValue={keyword} />
    </div>
  );
};

export default SearchPage;
