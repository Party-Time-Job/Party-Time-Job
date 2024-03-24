const NoticePageLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div id='loader' />
    </>
  );
};

export default NoticePageLayout;
