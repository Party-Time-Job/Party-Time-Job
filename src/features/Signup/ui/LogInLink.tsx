import Link from 'next/link';

const LogInLink = () => {
  return (
    <span className='mt-5 text-sm font-light text-gray-500'>
      이미 가입하셨나요?{' '}
      <Link href='/login'>
        <span className='cursor-pointer font-bold text-test-green'>
          {' '}
          로그인하기
        </span>
      </Link>
    </span>
  );
};

export default LogInLink;
