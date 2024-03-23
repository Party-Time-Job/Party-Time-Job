'use client';

import { RecoilRoot } from 'recoil';
import LogInPage from '@/pages/LogInPage/LogInPage';

const page = () => {
  return (
    <RecoilRoot>
      <LogInPage />
    </RecoilRoot>
  );
};

export default page;
