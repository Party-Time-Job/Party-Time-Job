import Link from 'next/link';

const SignUpLink = () => {
  return (
    <span className='mt-5 font-light'>
      회원이 아니신가요?{' '}
      <Link href='/signup'>
        <span className='cursor-pointer font-bold text-pt-primary'>
          회원가입하기
        </span>
      </Link>
    </span>
  );
};

export default SignUpLink;
