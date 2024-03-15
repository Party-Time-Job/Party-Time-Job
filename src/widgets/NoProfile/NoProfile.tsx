import Title from '@/shared/ui/Title';
import NoProfileRegister from './NoProfileRegister';
import RegisterButton from '../RegisterButton/RegisterButton';
import ProfileContainer from '../ProfileContainer/ProfileContainer';

export interface NoProfileInterface {
  isExist: boolean;
  profile?: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}

const NoProfile = ({ isExist, profile }: NoProfileInterface) => {
  return (
    <div>
      <Title title='내 프로필' size={28} gap={32}>
        {!isExist && (
          <NoProfileRegister
            text='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
            button={<RegisterButton />}
          />
        )}
        {isExist && profile && <ProfileContainer {...profile} />}
      </Title>
    </div>
  );
};

export default NoProfile;
