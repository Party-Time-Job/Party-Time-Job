'use client';

import { useEffect, useState } from 'react';
import Loader from '@/shared/ui/Loader';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  const LoadingSpinner = () => <Loader />;

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      {showSpinner && <LoadingSpinner />}
      <div id='register' />
      <div id='toast' />
      <div id='loader' />
      <div id='dialog' />
    </>
  );
};

export default ProfileLayout;
