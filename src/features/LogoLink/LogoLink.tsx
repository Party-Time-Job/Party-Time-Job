import Link from 'next/link';
import Logo from '@/shared/ui/Logo';

/**
 * 아직 로고가 만들어지지 않아서 임시로 h1 태그를 사용했고, 클래스네임도 임시로 지정했습니다.
 * 나중에 디자인이 완성되면 클래스네임은 빼고 디자인만 적용할 예정입니다.
 */
const LogoLink = () => {
  return (
    <Link href='/notice'>
      <Logo />
    </Link>
  );
};

export default LogoLink;
