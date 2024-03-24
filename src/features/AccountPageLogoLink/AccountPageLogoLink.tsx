import Link from 'next/link';

const AccountPageLogoLink = () => {
  return (
    <Link href='/'>
      <div className='logo-container mb-10 flex flex-col items-center gap-2'>
        <img src='/logo.png' className='flex h-32 w-32' />
      </div>
    </Link>
  );
};

export default AccountPageLogoLink;
