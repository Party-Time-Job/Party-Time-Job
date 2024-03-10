import Image from 'next/image';

export const Post = () => {
  return (
    <div className="inline-flex flex-col items-start gap-5 rounded-xl border border-solid border-pt-gray20 bg-white p-4">
      <Image
        src={'/default-image.png'}
        alt="default-image"
        width={280}
        height={160}
        className="rounded-xl"
      />
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-2">
          <h3>도토리식당</h3>
          <div className="flex gap-1.5">
            <Image src={'/clock-icon.svg'} alt="icon" width={20} height={20} />
            <span className="text-sm">2023-01-02 15:00~18:00 (3시간)</span>
          </div>
          <div className="flex gap-1.5">
            <Image
              src={'/location-icon.svg'}
              alt="icon"
              width={20}
              height={20}
            />
            <span className="text-sm">서울시 송파구</span>
          </div>
        </div>
        <div className="flex items-center justify-between self-stretch">
          <h2>15,000원</h2>
          <div className="flex h-9 items-center rounded-[20px] bg-pt-green40 p-3 text-white">
            <div className="flex items-center gap-0.5">
              <span className="pt-0.5 text-sm font-bold">
                기존 시급보다 100%
              </span>
              <Image
                src={'/arrow-up-icon.svg'}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
