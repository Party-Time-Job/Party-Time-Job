'use client';

import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const params = useSearchParams();
  const keyword = params?.get('keyword');

  return <div>{keyword}검색결과</div>;
};

export default SearchPage;
