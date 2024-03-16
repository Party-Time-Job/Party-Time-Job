import Link from 'next/link';
import Text from '@/shared/ui/Text';

const SignUpLink = () => {
  return (
    <Link href='/signup'>
      <Text as='span' className='text-white'>
        회원가입
      </Text>
    </Link>
  );
};

export default SignUpLink;
