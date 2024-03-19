import NoticePage from '@/pages/NoticePage/NoticePage';

const page = ({
  searchParams: { page: pageNumber },
}: {
  searchParams: { page: number };
}) => {
  return <NoticePage pageNumber={pageNumber} />;
};

export default page;
