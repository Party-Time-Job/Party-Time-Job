import Link from 'next/link';
import Text from '@/shared/ui/Text';

const LoginLink = () => {
  return (
    <Link href='/login'>
      <Text as='span' className='text-white'>
        로그인
      </Text>
    </Link>
  );
};

export default LoginLink;
