import Link from 'next/link';
import Text from '@/shared/ui/Text';

const SignUpLink = () => {
  return (
    <Link href='/signup'>
      <Text as='span'>회원가입</Text>
    </Link>
  );
};

export default SignUpLink;
