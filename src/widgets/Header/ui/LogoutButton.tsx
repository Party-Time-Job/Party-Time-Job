import { useRouter } from 'next/navigation';
import HeaderButton from './HeaderButton';

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/');
    window.location.reload();
  };

  return <HeaderButton text='로그아웃' onClick={handleLogout} />;
};

export default LogoutButton;
