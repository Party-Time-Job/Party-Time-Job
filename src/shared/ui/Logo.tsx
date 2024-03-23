import Text from './Text';

const Logo = () => {
  return (
    <div className='logo-container flex items-center gap-2'>
      <img src='/logo.png' className='h-10 w-10' />
      <Text
        as='span'
        className='text-md logo-text pl-1 text-gray-400 transition-all duration-300 hover:text-test-green'
      >
        Party Time Job
      </Text>
    </div>
  );
};

export default Logo;
