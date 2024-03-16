import Text from '@/shared/ui/Text';

const EmployeeCardList = () => {
  return (
    <div className='mt-10 flex w-[900px] flex-col items-center justify-center gap-10'>
      <div className='flex gap-10'>
        <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
          <div className='flex flex-col items-center gap-2 text-xl'>
            <Text as='span'>내일 당장 일할 알바를 찾으세요?</Text>
            <Text as='span'>
              <Text as='span' className='text-test-blue font-bold'>
                PARTY TIME JOB
              </Text>
              에서 시작하세요!
            </Text>
          </div>
        </div>
        <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
          <div className='flex flex-col items-center gap-2 text-xl'>
            <Text as='span'>다양한 업체의 시급을 비교하며 </Text>
            <Text as='span'>
              당신에게{' '}
              <Text as='span' className='text-test-blue font-bold'>
                최적의 알바
              </Text>
              를 찾아드립니다.
            </Text>
          </div>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
          <div className='flex flex-col items-center gap-2 text-xl'>
            <Text as='span'>당신에게 딱 맞는 일자리를</Text>
            <Text as='span'>
              <Text as='span' className='text-test-blue font-bold'>
                빠르고 쉽게
              </Text>{' '}
              찾을 수 있습니다.
            </Text>
          </div>
        </div>
        <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
          <div className='flex flex-col items-center gap-2 text-xl'>
            <Text as='span'>
              <Text as='span' className='text-test-blue font-bold'>
                신속하게{' '}
              </Text>
              알바를 찾고
            </Text>
            <Text as='span'>바로 일할 수 있는 기회를 제공합니다.</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCardList;
