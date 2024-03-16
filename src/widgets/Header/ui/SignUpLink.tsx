import Link from 'next/link';
import HeaderButton from './HeaderButton';

const SignUpLink = () => {
  return (
    <Link href='/signup'>
      <HeaderButton text='회원가입' />
    </Link>
  );
};

export default SignUpLink;
