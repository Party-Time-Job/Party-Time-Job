import Link from 'next/link';
import Text from '@/shared/ui/Text';

const EmployeeOverview = () => {
  return (
    <article className='w-[450px]'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-5'>
        <div className='bg-test-blue flex h-8 w-16 items-center justify-center rounded-lg text-black'>
          <Text as='span' className='font-bold'>
            알바님
          </Text>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <Text as='span' className='text-xl font-bold text-white'>
            급하게{' '}
            <Text as='span' className='text-test-blue'>
              일자리
            </Text>
            가 필요하신가요?
          </Text>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Text as='p' className='font-light text-white'>
            맞춤형 공고 탐색으로 최적의 알바 경험을 제공합니다.
          </Text>
          <Text as='p' className='font-light text-white'>
            원하는 조건에 맞는 알바를 쉽게 찾아 신속히 시작하세요.
          </Text>
          <Text as='p' className='font-bold text-white'>
            복잡한 절차 없이 알바를 바로 시작하세요.
          </Text>
        </div>
        <Link href='/login'>
          <button className='border-test-blue hover:bg-test-blue rounded-xl border-2 px-4 py-2 font-bold text-white transition-all duration-300 hover:font-bold hover:text-black'>
            시작하기
          </button>
        </Link>
      </div>
    </article>
  );
};

export default EmployeeOverview;
