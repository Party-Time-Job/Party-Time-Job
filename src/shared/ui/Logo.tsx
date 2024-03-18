import Text from './Text';

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src='/logo.png' className='h-8 w-8' />
      <Text as='span' className='text-test-green'>
        PARTY TIME JOB
      </Text>
    </div>
  );
};

export default Logo;
