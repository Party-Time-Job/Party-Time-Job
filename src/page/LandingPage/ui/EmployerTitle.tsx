import Text from '@/shared/ui/Text';

const EmployerTitle = () => {
  return (
    <>
      <div className='flex justify-center gap-4 lg:justify-normal'>
        <div className='flex h-8 w-16 items-center justify-center rounded-lg bg-test-green text-black'>
          <Text as='span' className='font-bold'>
            사장님
          </Text>
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        <div className='flex flex-col items-center gap-4 text-5xl lg:items-start'>
          <Text as='span' className='font-light'>
            <Text as='span' className='font-bold text-test-green'>
              사장님
            </Text>
            들이
          </Text>
          <Text as='span' className='font-light'>
            우리 서비스를 꼭
          </Text>
          <Text as='span' className='font-bold text-test-green'>
            이용해야 하는 이유
          </Text>
        </div>
      </div>
    </>
  );
};

export default EmployerTitle;
