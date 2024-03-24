import Text from './Text';

const Logo = () => {
  return (
    <div className='color-change flex items-center gap-2'>
      <img src='/logo.png' className='h-10 w-10' />
      <Text
        as='span'
        className='text-md logo-text color-change pl-1 text-gray-400'
      >
        Party Time Job
      </Text>
    </div>
  );
};

export default Logo;
