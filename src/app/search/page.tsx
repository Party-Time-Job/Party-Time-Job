import SearchPage from '@/pages/searchPage/SearchPage';

const page = ({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) => {
  return <SearchPage keyword={keyword} />;
};

export default page;
