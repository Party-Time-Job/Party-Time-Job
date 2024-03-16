export default function Home() {
  return (
    <>
      <section className='flex h-[800px] w-full items-center justify-center bg-black text-white'>
        <div className='flex w-[900px] flex-col px-12'>
          <div>
            <h2 className='font-light'>아르바이트</h2>
            <h2 className='font-light'>구인구직 플랫폼</h2>
          </div>
          <div className='flex items-end gap-8'>
            <h1 className='text-test-green text-4xl'>PARTY TIME JOB</h1>
            <div className='border-test-green flex h-24 w-24 items-center justify-center rounded-xl border-2 text-sm text-white'>
              로고
            </div>
          </div>
        </div>
        <img src='test-main.png' className='w-[300px]' />
      </section>

      <section className='w-full bg-black px-12'>
        <div className='flex justify-center'>
          <h1 className='text-4xl font-light text-white'>Overview</h1>
        </div>

        <article className='flex h-[450px] justify-center gap-10'>
          <article className='w-[450px]'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-5'>
              <div className='bg-test-green flex h-8 w-16 items-center justify-center rounded-lg text-black'>
                <span className='font-bold'>사장님</span>
              </div>
              <div className='flex flex-col items-center justify-center gap-6'>
                <span className='text-xl font-bold text-white'>
                  급하게 <span className='text-test-green'>일손</span>이
                  필요하신가요?
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                <p className='font-light text-white'>
                  서비스가 너무 기본적이라서 딱히 넣을 말이 없습니다.
                </p>
                <p className='font-light text-white'>
                  저는 알바천국 쓸 것 같습니다. 장점도 별로 없는 것 같습니다.
                </p>
                <p className='font-bold text-white'>
                  빠르게 일자리를 구하고 싶으신 분들을 위한 플랫폼입니다.
                </p>
              </div>
              <button className='border-test-green rounded-xl border-2 px-4 py-2 text-white'>
                시작하기
              </button>
            </div>
          </article>

          <article className='w-[450px]'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-5'>
              <div className='bg-test-blue flex h-8 w-16 items-center justify-center rounded-lg text-black'>
                <span className='font-bold'>알바님</span>
              </div>
              <div className='flex flex-col items-center justify-center gap-6'>
                <span className='text-xl font-bold text-white'>
                  급하게 <span className='text-test-blue'>일자리</span>가
                  필요하신가요?
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                <p className='font-light text-white'>
                  서비스가 너무 기본적이라서 딱히 넣을 말이 없습니다.
                </p>
                <p className='font-light text-white'>
                  저는 알바천국 쓸 것 같습니다. 장점도 별로 없는 것 같습니다.
                </p>
                <p className='font-bold text-white'>
                  빠르게 일자리를 구하고 싶으신 분들을 위한 플랫폼입니다.
                </p>
              </div>
              <button className='border-test-blue rounded-xl border-2 px-4 py-2 text-white'>
                시작하기
              </button>
            </div>
          </article>
        </article>
      </section>

      <section className='flex h-[1200px] w-full items-center justify-center bg-black text-white'>
        <div className='flex w-[900px] flex-col gap-8'>
          <div className='flex gap-4'>
            <div className='bg-test-green flex h-8 w-16 items-center justify-center rounded-lg text-black'>
              <span className='font-bold'>사장님</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4 text-5xl'>
              <span className='font-light'>
                <span className='text-test-green font-bold'>사장님</span>들이
              </span>
              <span className='font-light'>우리 서비스를 꼭</span>
              <span className='text-test-green font-bold'>
                이용해야 하는 이유
              </span>
            </div>
          </div>
          <div className='mt-10 flex w-[900px] flex-col items-center justify-center gap-10'>
            <div className='flex gap-10'>
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
            </div>
            <div className='flex gap-10'>
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
            </div>
          </div>
        </div>
      </section>

      <section className='flex h-[1200px] w-full items-center justify-center bg-black text-white'>
        <div className='flex w-[900px] flex-col gap-8'>
          <div className='flex gap-4'>
            <div className='bg-test-blue flex h-8 w-16 items-center justify-center rounded-lg text-black'>
              <span className='font-bold'>알바님</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4 text-5xl'>
              <span className='font-light'>
                <span className='text-test-blue font-bold'>알바님</span>들이
              </span>
              <span className='font-light'>우리 서비스를 꼭</span>
              <span className='text-test-blue font-bold'>
                이용해야 하는 이유
              </span>
            </div>
          </div>
          <div className='mt-10 flex w-[900px] flex-col items-center justify-center gap-10'>
            <div className='flex gap-10'>
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
            </div>
            <div className='flex gap-10'>
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
              <div className='bg-test-black h-80 w-[450px] rounded-3xl border border-gray-500' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
