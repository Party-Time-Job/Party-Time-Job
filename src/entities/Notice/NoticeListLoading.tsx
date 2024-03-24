const NoticeListLoading = ({
  category,
  listCategory,
}: {
  category: string;
  listCategory: string;
}) => {
  if (category === 'search' || listCategory === 'filter') {
    return (
      <div className='col-span-3 row-span-3 flex h-[520px] w-[354px] items-center justify-center border-[2px] border-solid border-test-black md:h-[728px] md:w-full'>
        앗... 검색 결과가 없습니다...
      </div>
    );
  }
  if (category === 'recent') {
    return (
      <div className='col-span-3 row-span-3 flex h-[520px] w-[354px] items-center justify-center rounded-3xl border-[2px] border-solid border-test-black md:h-[728px] md:w-full'>
        이번이 처음 본 공고에요!
      </div>
    );
  }
  return (
    <>
      <div className=' z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
      <div className='z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
      <div className='z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
      <div className='z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
      <div className='z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
      <div className='z-0 h-[262px] w-[173px] rounded-xl bg-test-black md:h-[350px] md:w-[314px]'></div>
    </>
  );
};

export default NoticeListLoading;
