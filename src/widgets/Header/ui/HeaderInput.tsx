// 검색 로직 이쪽에 구현해주세요!
const HeaderInput = () => {
  return (
    <div className='relative'>
      <input
        placeholder='가게 이름으로 찾아보세요'
        className='h-10 w-[344px] rounded-md bg-[#F2F2F3] pl-10 text-sm lg:w-[450px]'
      />
      <img
        src='/search.svg'
        alt='검색'
        className='absolute left-2 top-1/2 -translate-y-1/2 transform'
      />
    </div>
  );
};

export default HeaderInput;
