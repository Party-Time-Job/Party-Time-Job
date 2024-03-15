import Link from 'next/link';

const LogInLink = () => {
  return (
    <span className='mt-5 font-light'>
      이미 가입하셨나요?{' '}
      <Link href='/login'>
        <span className='cursor-pointer font-bold text-pt-primary'>
          로그인하기
        </span>
      </Link>
    </span>
  );
};

export default LogInLink;
