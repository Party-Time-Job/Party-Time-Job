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
    <div className='absolute right-0 top-[60px] w-[665px] rounded-xl bg-[#ffebe7] p-8 md:relative md:top-0 md:p-5 lg:relative lg:top-0 lg:w-full'>
      <div className='mb-3 flex flex-col gap-2'>
        <h2 className='mb-3 flex flex-col gap-2 text-base font-bold text-[#3c6e71] md:text-sm md:font-bold'>
          이름
        </h2>
        <h1 className='mb-3 flex flex-col gap-2 text-[28px] font-bold text-black md:text-2xl md:font-bold'>
          {name}
        </h1>
      </div>
      <div className='mb-7 flex flex-col gap-3'>
        <div className='mb-7 flex gap-1.5 text-base font-normal text-[#7d7986]'>
          <Image src='/phone.png' alt='연락처 아이콘' width={20} height={20} />
          <span>{slicePhoneNumber(phone)}</span>
        </div>
        <div className='mb-7 flex gap-1.5 text-base font-normal text-[#7d7986] md:text-sm md:font-normal'>
          <Image
            src='/address.png'
            alt='선호 지역 아이콘'
            width={20}
            height={20}
          />
          <span>선호 지역: {address}</span>
        </div>
      </div>
      <div className='text-base font-normal md:text-sm md:font-normal'>
        <p>{bio}</p>
      </div>
      <div className='absolute right-[32px] top-[32px] w-[169px] md:right-[20px] md:top-[20px] md:w-[108px]'>
        <EditButton name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  );
};

export default ProfileContainerUi;
