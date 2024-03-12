const getNoticeDetail = async (shopId: string, noticeId: string) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}`,
  );
  const result: NoticeDetail = await response.json();
  return result;
};

const page = async ({
  params: { shopId, noticeId },
}: {
  params: { shopId: string; noticeId: string };
}) => {
  const data = await getNoticeDetail(shopId, noticeId);
  console.log(data);
  return <div></div>;
};

export default page;
