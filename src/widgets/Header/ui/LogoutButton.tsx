import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { deleteCookie } from 'cookies-next';
import HeaderButton from './HeaderButton';
import TokenState from '@/atoms/tokenState';
import userTypeState from '@/atoms/userTypeState';

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
    router.push('/');
  };

  return (
    <div>
      <HeaderButton text='로그아웃' onClick={handleLogout} />
    </div>
  );
};

export default LogoutButton;
