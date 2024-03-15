import FooterIcon from './ui/FooterIcon';
import PrivacyFAQ from './ui/PrivacyFAQ';
import CopyRight from './ui/CopyRight';

const Footer = () => {
  return (
    <footer className='flex h-[126px] items-center justify-between bg-[#F2F2F3] px-8 text-sm text-[#7D7986] md:h-[100px] md:px-8 lg:px-60'>
      <div className='hidden md:flex'>
        <CopyRight />
      </div>
      <div className='hidden gap-5 md:flex'>
        <PrivacyFAQ />
      </div>
      <div className='flex w-full flex-col gap-10 md:hidden'>
        <div>
          <div className='flex w-full items-center justify-between'>
            <div className='flex gap-5'>
              <PrivacyFAQ />
            </div>
            <div className='flex gap-2'>
              <FooterIcon />
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <CopyRight />
        </div>
      </div>
      <div className='hidden gap-2 md:flex'>
        <FooterIcon />
      </div>
    </footer>
  );
};

export default Footer;
