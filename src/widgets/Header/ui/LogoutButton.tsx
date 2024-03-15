import { useRouter } from 'next/navigation';
import Text from '@/shared/ui/Text';

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/');
    window.location.reload();
  };

  return (
    <Text onClick={handleLogout} className='cursor-pointer' as='span'>
      로그아웃
    </Text>
  );
};

export default LogoutButton;
