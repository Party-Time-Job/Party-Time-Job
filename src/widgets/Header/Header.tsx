const Header = () => {
  return (
    <header className='fixed flex h-16 w-full items-center justify-center'>
      <h1>로고입니다</h1>
      <input
        placeholder='가게 이름으로 찾아보세요'
        className='h-10 w-[450px] rounded-md bg-gray-300 p-2'
      />
      <h1>로그인</h1>
      <h1>회원가입</h1>
      <div>알림아이콘</div>
    </header>
  );
};

export default Header;
