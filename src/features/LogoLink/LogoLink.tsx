import Link from 'next/link';
import Logo from '@/shared/ui/Logo';

/**
 * 로고는 공동으로 사용될 것 같아서, 이동 기능이 없는 ui만 shared로 분리했고, 이동 기능이 들어간 로고는 feature에 위치시켰습니다.
 */
const LogoLink = () => {
  return (
    <Link href='/notice'>
      <Logo />
    </Link>
  );
};

export default LogoLink;
