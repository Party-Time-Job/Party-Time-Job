import Link from 'next/link';
import HeaderButton from './HeaderButton';

// 내 가게 상세 페이지 생성되면 href에 해당하는 경로로 수정해주세요
const MyStoreLink = () => {
  return (
    <Link href='/my-store'>
      <HeaderButton text='내 가게' />
    </Link>
  );
};

export default MyStoreLink;
