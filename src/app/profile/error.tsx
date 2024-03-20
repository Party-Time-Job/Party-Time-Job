'use client';

const ProfilePageError = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  console.log(error.message);
  return (
    <div className='relative top-0 h-screen w-full'>
      <div className='absolute flex h-full w-full flex-col items-center justify-center'>
        <div className='block text-[#7d7986]'>
          <h1>프로필 페이지를 불러오는 과정에 오류가 발생했습니다.</h1>
        </div>
        <div className='mt-5 block'>
          <button
            type='button'
            onClick={() => reset()}
            className='flex cursor-pointer items-center justify-center rounded-[20px] bg-[#395253] px-4 py-2.5 text-white'
          >
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageError;
