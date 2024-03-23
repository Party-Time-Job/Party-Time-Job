import Text from '@/shared/ui/Text';

const EmployeeCardList = () => {
  return (
    <div className='mt-10 flex w-[900px] flex-col items-center justify-center gap-10'>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-blue lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>내일 당장 일할 알바를 찾으세요?</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-blue'>
                PARTY TIME JOB
              </Text>
              에서 시작하세요!
            </Text>
          </div>
        </div>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-blue lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>다양한 업체의 시급을 비교하며 </Text>
            <Text as='span'>
              당신에게{' '}
              <Text as='span' className='font-bold text-test-blue'>
                최적의 알바
              </Text>
              를 찾아드립니다.
            </Text>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-blue lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>당신에게 딱 맞는 일자리를</Text>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-blue'>
                빠르고 쉽게
              </Text>{' '}
              찾을 수 있습니다.
            </Text>
          </div>
        </div>
        <div className='flex h-80 w-[300px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 bg-test-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-blue lg:w-[450px]'>
          <div className='flex flex-col items-center gap-2 text-sm lg:text-xl'>
            <Text as='span'>
              <Text as='span' className='font-bold text-test-blue'>
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
