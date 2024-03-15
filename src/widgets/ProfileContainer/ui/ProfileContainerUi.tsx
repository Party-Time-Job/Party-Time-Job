import Image from 'next/image';
import EditButton from '@/widgets/EditButton/EditButton';

export interface ProfileContainerUiInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const slicePhoneNumber = (phone: string) =>
  `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}}`;

const ProfileContainerUi = ({
  name,
  phone,
  address,
  bio,
}: ProfileContainerUiInterface) => {
  return (
    <div>
      <div>
        <h2>이름</h2>
        <h1>{name}</h1>
      </div>
      <div>
        <div>
          <Image src='/phone.png' alt='연락처 아이콘' width={20} height={20} />
          <span>{slicePhoneNumber(phone)}</span>
        </div>
        <div>
          <Image
            src='/address.png'
            alt='선호 지역 아이콘'
            width={20}
            height={20}
          />
          <span>선호 지역: {address}</span>
        </div>
      </div>
      <div>
        <p>{bio}</p>
      </div>
      <div>
        <EditButton name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  );
};

export default ProfileContainerUi;
