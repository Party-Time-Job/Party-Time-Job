import Image from 'next/image';
import EditButton from '@/widgets/EditButton/EditButton';

export interface ProfileContainerUiInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const slicePhoneNumber = (phone: string) => {
  if (!phone || phone.length < 11) {
    return '';
  }
  return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}}`;
};

const ProfileContainerUi = ({
  name,
  phone,
  address,
  bio,
}: ProfileContainerUiInterface) => {
  return (
    <div className='relative right-0 top-[60px] w-[665px] rounded-xl bg-[#ffebe7] p-8 sm:relative md:relative lg:absolute'>
      <div className='mb-3 flex flex-col gap-2'>
        <h2 className='text-sm font-bold text-[#3c6e71] sm:text-base'>이름</h2>
        <h1 className='text-[24px] font-bold text-black sm:text-[28px]'>
          {name}
        </h1>
      </div>
      <div className='mb-7 flex flex-col gap-3'>
        <div className='flex gap-1.5 text-sm font-normal text-[#7d7986] sm:text-base'>
          <Image src='/phone.png' alt='연락처 아이콘' width={20} height={20} />
          <span>{slicePhoneNumber(phone)}</span>
        </div>
        <div className='flex gap-1.5 text-sm font-normal text-[#7d7986] sm:text-base'>
          <Image
            src='/address.png'
            alt='선호 지역 아이콘'
            width={20}
            height={20}
          />
          <span>선호 지역: {address}</span>
        </div>
      </div>
      <div className='text-sm font-normal sm:text-base'>
        <p>{bio}</p>
      </div>
      <div className='absolute right-[20px] top-[20px] w-[108px] sm:right-[32px] sm:top-[32px] sm:w-[169px]'>
        <EditButton name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  );
};

export default ProfileContainerUi;
