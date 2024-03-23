'use client';

import { RecoilRoot } from 'recoil';
import LogInPage from '@/page/LogInPage/LogInPage';

const page = () => {
  return (
    <RecoilRoot>
      <LogInPage />
    </RecoilRoot>
  );
};

export default page;
