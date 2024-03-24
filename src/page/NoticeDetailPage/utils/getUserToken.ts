import { getCookie } from 'cookies-next';

const getUserToken = () => {
  if (typeof window !== 'undefined') {
    const token = getCookie('token');
    return token || '';
  }
  return '';
};
export default getUserToken;
