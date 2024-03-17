const ProfilePageLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div id='register' />
      <div id='toast' />
      <div id='loader' />
      <div id='dialog' />
    </>
  );
};

export default ProfilePageLayout;
