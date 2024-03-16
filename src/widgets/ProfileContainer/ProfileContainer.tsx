import ProfileContainerUi from './ui/ProfileContainerUi';

export interface ProfileContainerInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const ProfileContainer = ({
  name,
  phone,
  address,
  bio,
}: ProfileContainerInterface) => {
  return (
    <ProfileContainerUi name={name} phone={phone} address={address} bio={bio} />
  );
};

export default ProfileContainer;
