import Link from 'next/link';
import Text from '@/shared/ui/Text';

// 내 가게 상세 페이지 생성되면 href에 해당하는 경로로 수정해주세요
const MyStoreLink = () => {
  return (
    <Link href='/my-store'>
      <Text as='span'>내 가게</Text>
    </Link>
  );
};

export default MyStoreLink;
