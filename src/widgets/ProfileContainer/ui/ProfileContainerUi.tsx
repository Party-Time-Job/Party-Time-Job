import Image from 'next/image';
import EditButton from '@/widgets/EditButton/EditButton';
import Text from '@/shared/ui/Text';

export interface ProfileContainerUiInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const ProfileContainerUi = ({
  name,
  phone,
  address,
  bio,
}: ProfileContainerUiInterface) => {
  return (
    <div className='relative right-0 top-[60px] w-[665px] rounded-xl bg-test-black p-8 sm:relative md:relative lg:absolute'>
      <div className='mb-5 flex flex-col gap-2'>
        <div className='flex h-8 w-16 items-center justify-center rounded-lg bg-test-green text-black'>
          <Text as='span' className='font-bold'>
            이름
          </Text>
        </div>
        <h1 className='text-4xl font-bold text-white sm:text-[28px]'>{name}</h1>
      </div>
      <div className='mb-7 flex flex-col items-start justify-center gap-3'>
        <div className='flex gap-1.5 text-sm font-normal text-white sm:text-base'>
          <div className='mr-2 flex h-[20px] w-[20px] items-center justify-center'>
            <div className='flex h-[24px] w-[16px] items-center justify-center rounded-sm bg-test-green'>
              <div className='flex h-[18px] w-[14px] items-center justify-center bg-test-black' />
            </div>
          </div>
          <span>{phone}</span>
        </div>
        <div className='flex gap-1.5 text-sm font-normal text-white sm:text-base'>
          <Image
            src='/location-green.svg'
            alt='선호 지역 아이콘'
            width={20}
            height={20}
            className='mr-2'
          />
          <span>선호 지역: {address}</span>
        </div>
      </div>
      <div className='text-sm font-normal text-white sm:text-base'>
        <p>{bio}</p>
      </div>
      <div className='absolute right-[20px] top-[20px] w-[108px] sm:right-[32px] sm:top-[32px] sm:w-[169px]'>
        <EditButton name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  );
};

export default ProfileContainerUi;
