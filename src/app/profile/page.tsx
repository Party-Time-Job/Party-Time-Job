import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Loader from '@/shared/ui/Loader';
import Application from '@/widgets/Application/Application';
import NoRegisterUi from '@/widgets/Application/ui/NoRegisterUi';
import NoProfile from '@/widgets/NoProfile/NoProfile';
import getInformation from '@/widgets/api/getInformation';

export const revalidate = 3600;

const ProfilePage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const instance = cookies();
  const userId = instance.get('userid')?.value;
  const response = await getInformation(userId as string);
  const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page));
  let profile = {
    name: '',
    phone: '',
    address: '',
    bio: '',
  };
  let isRegistered = false;

  if (response instanceof Error) {
    throw response;
  } else if (typeof response === 'string') {
    throw new Error(response);
  } else {
    if (response.item.type === 'employer') {
      redirect('/store');
    }
    profile = {
      name: response.item.name as string,
      phone: response.item.phone as string,
      address: response.item.address as string,
      bio: response.item.bio as string,
    };
    if (profile.name && profile.phone && profile.address && profile.bio) {
      isRegistered = true;
    }
  }

  return (
    <div>
      <NoProfile isExist={isRegistered} profile={profile} />
      {!isRegistered && <NoRegisterUi />}
      <Suspense fallback={<Loader />}>
        {isRegistered && <Application page={page} />}
      </Suspense>
    </div>
  );
};

export default ProfilePage;
