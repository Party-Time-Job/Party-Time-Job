import Link from 'next/link';
import Text from '@/shared/ui/Text';

const EmployerOverview = () => {
  return (
    <article className='w-[450px]'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-5'>
        <div className='flex h-8 w-16 items-center justify-center rounded-lg bg-test-green text-black'>
          <Text as='span' className='font-bold'>
            사장님
          </Text>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <Text as='span' className='text-xl font-bold text-white'>
            급하게{' '}
            <Text as='span' className='text-test-green'>
              일손
            </Text>
            이 필요하신가요?
          </Text>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Text as='p' className='font-light text-white'>
            시장 조건에 맞춰 가장 적합한 인재를 찾습니다.
          </Text>
          <Text as='p' className='font-light text-white'>
            신속한 매칭으로 비즈니스의 공백을 최소화하세요.
          </Text>
          <Text as='p' className='font-bold text-white'>
            복잡한 절차 없이 긴급한 인력 수요를 해결하세요.
          </Text>
        </div>
        <Link href='/login'>
          <button className='rounded-xl border-2 border-test-green px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-test-green hover:font-bold hover:text-black'>
            시작하기
          </button>
        </Link>
      </div>
    </article>
  );
};
export default EmployerOverview;
