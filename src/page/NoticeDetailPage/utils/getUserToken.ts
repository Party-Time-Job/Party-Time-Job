const getUserToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    return token ? JSON.stringify(token) : '';
  }
  return '';
};
export default getUserToken;
