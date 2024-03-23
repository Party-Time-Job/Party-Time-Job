'use client';

import { usePathname } from 'next/navigation';
import FooterIcon from './ui/FooterIcon';
import PrivacyFAQ from './ui/PrivacyFAQ';
import CopyRight from './ui/CopyRight';

/**
 * 푸터에는 아무 기능도 넣지 않았고, ui만 구현했습니다.
 */
const Footer = () => {
  const pathname = usePathname();

  if (
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname.startsWith('/shop/registration/recruitment/new') ||
    pathname.startsWith('/shop/registration/shop-info/new') ||
    pathname.startsWith('/shop/registration/recruitment/edit') ||
    pathname.match(/^\/shop\/registration\/shop-info\/.+/)
  ) {
    return null;
  }

  return (
    <footer className='flex h-[126px] items-center justify-between bg-black px-8 text-sm text-[#7D7986] md:h-[100px] md:px-8 lg:px-60'>
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
