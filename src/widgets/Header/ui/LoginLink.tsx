import Link from 'next/link';
import HeaderButton from './HeaderButton';

const LoginLink = () => {
  return (
    <Link href='/login'>
      <HeaderButton text='로그인' />
    </Link>
  );
};

export default LoginLink;
