import LogoLink from '@/features/LogoLink/LogoLink';
import HeaderNavigation from './ui/HeaderNavigation';

const Header = () => {
  return (
    <header className='h-24 w-full md:h-16'>
      <div className='fixed flex h-24 w-full items-center justify-center bg-white md:h-16'>
        <div className='fixed flex justify-between md:w-[744px] md:px-9 lg:w-[1440px] lg:px-56'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center lg:gap-10'>
            <div className='flex justify-between'>
              <LogoLink />
              <div className='flex items-center gap-3 font-bold md:hidden lg:gap-10'>
                <HeaderNavigation />
              </div>
            </div>
            <input
              placeholder='가게 이름으로 찾아보세요'
              className='h-10 w-[344px] rounded-md bg-gray-300 p-2 lg:w-[450px]'
            />
          </div>
          <div className='hidden items-center gap-3 font-bold md:flex lg:gap-10'>
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
