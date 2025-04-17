import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { deleteCookie } from 'cookies-next';
import HeaderButton from './HeaderButton';
import TokenState from '@/shared/atoms/tokenState';
import userTypeState from '@/shared/atoms/userTypeState';

const LogoutButton = () => {
  const router = useRouter();
  const setToken = useSetRecoilState(TokenState);
  const setUserType = useSetRecoilState(userTypeState);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    deleteCookie('token');
    deleteCookie('userid');
    setToken(null);
    setUserType(null);
    router.push('/landing');
  };

  return (
    <div>
      <HeaderButton text='로그아웃' onClick={handleLogout} />
    </div>
  );
};

export default LogoutButton;
