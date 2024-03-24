import LandingLogo from '@/shared/ui/LandingLogo';
import Text from '@/shared/ui/Text';
import TextLogo from '@/shared/ui/TextLogo';
import EmployerOverview from './ui/EmployerOverview';
import EmployeeOverview from './ui/EmployeeOverview';
import EmployerTitle from './ui/EmployerTitle';
import EmployerCardList from './ui/EmployerCardList';
import EmployeeTitle from './ui/EmployeeTitle';
import EmployeeCardList from './ui/EmployeeCardList';
import ServiceExplain from './ui/ServiceExplain';
import LandingPageTopContents from './ui/LandingPageTopContents';

const LandingPage = () => {
  return (
    <>
      <LandingPageTopContents />
      <section className='w-full bg-black px-12'>
        <div className='flex justify-center'>
          <Text as='h1' className='text-4xl font-light text-white'>
            Overview
          </Text>
        </div>

        <article className='flex h-[800px] flex-col items-center justify-center gap-20 lg:flex lg:h-[450px] lg:flex-row lg:gap-10'>
          <EmployerOverview />
          <EmployeeOverview />
        </article>
      </section>

      <section className='flex h-[1900px] w-full items-center justify-center bg-black font-light text-white lg:h-[1200px]'>
        <div className='flex w-[900px] flex-col gap-8'>
          <EmployerTitle />
          <EmployerCardList />
        </div>
      </section>

      <section className='flex h-[1900px] w-full items-center justify-center bg-black text-white lg:h-[1200px]'>
        <div className='flex w-[900px] flex-col gap-8'>
          <EmployeeTitle />
          <EmployeeCardList />
        </div>
      </section>

      <section className='flex h-[500px] w-full items-center justify-center bg-black text-white'>
        <article className='flex flex-col items-center gap-6'>
          <LandingLogo />
          <TextLogo />
          <ServiceExplain />
        </article>
      </section>
    </>
  );
};

export default LandingPage;
