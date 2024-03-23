import LandingLogo from '@/shared/ui/LandingLogo';
import Text from '@/shared/ui/Text';
import TextLogo from '@/shared/ui/TextLogo';

const LandingPageTopContents = () => {
  return (
    <>
      <section className='relative hidden h-[800px] w-full items-center justify-center bg-black text-white lg:flex'>
        <div className='z-10 flex w-[900px] flex-col px-12'>
          <div>
            <Text as='h2' className='text-xl font-light'>
              당신의 알바 구인구직
            </Text>
            <Text as='h2' className='text-xl font-light'>
              이제는 파티처럼 신나게!
            </Text>
          </div>
          <div className='flex items-center gap-8'>
            <TextLogo />
            <LandingLogo />
          </div>
        </div>
        <section className='flex'>
          <img
            src='main-image.png'
            alt='main-image'
            className='absolute left-64 top-0 z-0 h-[900px] w-full object-contain opacity-55'
          />
        </section>
      </section>

      <section className='flex h-[800px] w-full items-center justify-center bg-black text-white lg:hidden'>
        <div className='flex w-[900px] flex-col items-center gap-6'>
          <LandingLogo />
          <TextLogo />
          <div className='text-center'>
            <Text as='h2' className='text-xl font-light'>
              당신의 알바 구인구직
            </Text>
            <Text as='h2' className='text-xl font-light'>
              이제는 파티처럼 신나게!
            </Text>
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingPageTopContents;
