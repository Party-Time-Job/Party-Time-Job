import Image from 'next/image';

export const Post = () => {
  return (
    <div className="inline-flex flex-col items-start gap-3 rounded-xl border border-solid border-pt-gray20 bg-white p-3 md:gap-5 md:p-4">
      <div className="relative flex h-[84px] w-[147px] items-center justify-center md:h-[160px] md:w-[280px]">
        <Image
          fill
          sizes="280px"
          src={'/default-image.png'}
          alt="default-image"
          className="rounded-xl"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-2">
          <span className="text-base font-bold leading-[20px] md:text-xl ">
            도토리식당
          </span>
          <div className="flex w-[147px] items-start gap-1.5 self-stretch md:w-[280px] md:items-center">
            <Image
              src={'/clock-icon.svg'}
              alt="icon"
              width={20}
              height={20}
              className="h-4 w-4 md:h-5 md:w-5"
            />

            <span className=" text-pt-gray30 inline-block text-xs md:text-sm md:leading-[22px]">
              2023-01-02 15:00~18:00 (3시간)
            </span>
          </div>
          <div className="flex items-start gap-1.5">
            <Image
              src={'/location-icon.svg'}
              alt="icon"
              width={20}
              height={20}
              className="h-4 w-4 md:h-5 md:w-5"
            />
            <span className="text-pt-gray30 text-xs md:text-sm md:leading-[22px]">
              서울시 송파구
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch md:flex-row md:items-center md:justify-between">
          <span className="text-lg font-bold leading-[22px] md:text-2xl">
            15,000원
          </span>
          <div className="flex text-pt-green40 md:h-9 md:items-center md:rounded-[20px] md:bg-pt-green40 md:p-3 md:text-white">
            <div className="flex items-center md:gap-0.5">
              <span className="pt-0.5 text-sm font-bold leading-4">
                기존 시급보다 100%
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="h-4 w-4 fill-pt-green40 md:h-5 md:w-5 md:fill-white"
              >
                <path
                  d="M12.5001 16.6668H7.50013V10.0001H3.4668L10.0001 3.4668L16.5335 10.0001H12.5001V16.6668Z"
                  className="h-4 w-4 fill-pt-green40 md:h-5 md:w-5 md:fill-white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
