import Text from '@/shared/ui/Text';

const Footer = () => {
  return (
    <footer className='flex h-[100px] items-center justify-between bg-[#F2F2F3] px-8 text-sm text-[#7D7986] md:px-8 lg:px-60'>
      <Text as='span' className='hidden md:flex'>
        ©codeit - 2023
      </Text>
      <div className='hidden gap-5 md:flex'>
        <Text as='span'>Privacy Policy</Text>
        <Text as='span'>FAQ</Text>
      </div>
      <div className='gap-10 md:hidden'>
        <div className='flex items-center'>
          <div className='flex gap-5'>
            <Text as='span'>Privacy Policy</Text>
            <Text as='span'>FAQ</Text>
          </div>
          <div className='flex gap-2'>
            <img src='envelope-square.svg' alt='email' />
            <img src='facebook-square.svg' alt='facebook' />
            <img src='instagram.svg' alt='instagram' />
          </div>
        </div>
        <Text as='span'>©codeit - 2023</Text>
      </div>
      <div className='hidden gap-2 md:flex'>
        <img src='envelope-square.svg' alt='email' />
        <img src='facebook-square.svg' alt='facebook' />
        <img src='instagram.svg' alt='instagram' />
      </div>
    </footer>
  );
};

export default Footer;
