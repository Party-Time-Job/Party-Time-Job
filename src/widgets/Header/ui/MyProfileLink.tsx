import Link from 'next/link';
import Text from '@/shared/ui/Text';

// 내 프로필 상세 페이지 생성되면 href에 해당하는 경로로 수정해주세요
const MyProfileLink = () => {
  return (
    <Link href='/profile'>
      <Text as='span'>내 프로필</Text>
    </Link>
  );
};

export default MyProfileLink;
