import Post from '@/entities/Post';

const notice: Notice = {
  item: {
    id: '99996477-82db-4bda-aae1-4044f11d9a8b',
    hourlyPay: 30000,
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 2,
    description: '도와주세요',
    closed: false,
    shop: {
      item: {
        id: '4490151c-5217-4157-b072-9c37b05bed47',
        name: '진주회관',
        category: '한식',
        address1: '서울시 중구',
        address2: '세종대로11길 26',
        description: '콩국수 맛집 인정따리',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
        originalHourlyPay: 10000,
      },
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
    },
  },
  links: [
    {
      rel: 'self',
      description: '공고 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b',
    },
    {
      rel: 'shop',
      description: '가게 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
    },
  ],
};

const CustomNotice = () => {
  return (
    <section className='flex w-full items-start justify-center bg-pt-green10 px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 md:gap-8 lg:w-[980px]'>
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          맞춤 공고
        </span>
        <div className='inline-flex w-full items-start gap-1 overflow-x-scroll scrollbar-hide md:gap-[14px]'>
          <Post notice={notice} />
          <Post notice={notice} />
          <Post notice={notice} />
          <Post notice={notice} />
          <Post notice={notice} />
        </div>
      </div>
    </section>
  );
};

export default CustomNotice;