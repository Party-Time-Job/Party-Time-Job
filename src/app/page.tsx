import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='flex h-[800px] w-full items-center justify-center bg-black text-white'>
        <div className='flex w-[900px] flex-col px-12'>
          <div>
            <h2 className='text-xl font-light'>당신의 알바 구인구직</h2>
            <h2 className='text-xl font-light'>이제는 파티처럼 신나게!</h2>
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
                  시장 조건에 맞춰 가장 적합한 인재를 찾습니다.
                </p>
                <p className='font-light text-white'>
                  신속한 매칭으로 비즈니스의 공백을 최소화하세요.
                </p>
                <p className='font-bold text-white'>
                  복잡한 절차 없이 긴급한 인력 수요를 해결하세요.
                </p>
              </div>
              <Link href='/login'>
                <button className='border-test-green hover:bg-test-green rounded-xl border-2 px-4 py-2 font-bold text-white transition-all duration-300 hover:font-bold hover:text-black'>
                  시작하기
                </button>
              </Link>
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
                  맞춤형 공고 탐색으로 최적의 알바 경험을 제공합니다.
                </p>
                <p className='font-light text-white'>
                  원하는 조건에 맞는 알바를 쉽게 찾아 신속히 시작하세요.
                </p>
                <p className='font-bold text-white'>
                  복잡한 절차 없이 알바를 바로 시작하세요.
                </p>
              </div>
              <Link href='/login'>
                <button className='border-test-blue hover:bg-test-blue rounded-xl border-2 px-4 py-2 font-bold text-white transition-all duration-300 hover:font-bold hover:text-black'>
                  시작하기
                </button>
              </Link>
            </div>
          </article>
        </article>
      </section>

      <section className='flex h-[1200px] w-full items-center justify-center bg-black font-light text-white'>
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
              <div className='bg-test-black hover:shadow-test-green flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl font-light'>
                  <span>급하게 일손이 필요할 때</span>
                  <span>
                    <span className='text-test-green font-bold'>
                      PARTY TIME JOB
                    </span>
                    이 해결사가 됩니다!
                  </span>
                </div>
              </div>
              <div className='bg-test-black hover:shadow-test-green flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>실시간으로 알바생과 연결되어</span>
                  <span>
                    <span className='text-test-green font-bold'>급한 일손</span>
                    을 즉시 해결하세요
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <div className='bg-test-black hover:shadow-test-green flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>시급을 조절하여 최적의 알바생을 찾아보세요</span>
                  <span>
                    <span className='text-test-green font-bold'>경쟁업체</span>
                    보다 한 발 앞서 나갈 수 있습니다.
                  </span>
                </div>
              </div>
              <div className='bg-test-black hover:shadow-test-green flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>급할수록 든든한 파트너</span>
                  <span>
                    <span className='text-test-green font-bold'>
                      PARTY TIME JOB
                    </span>
                    이 함께합니다.
                  </span>
                </div>
              </div>
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
              <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>내일 당장 일할 알바를 찾으세요?</span>
                  <span>
                    <span className='text-test-blue font-bold'>
                      PARTY TIME JOB
                    </span>
                    에서 시작하세요!
                  </span>
                </div>
              </div>
              <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>다양한 업체의 시급을 비교하며 </span>
                  <span>
                    당신에게{' '}
                    <span className='text-test-blue font-bold'>
                      최적의 알바
                    </span>
                    를 찾아드립니다.
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>당신에게 딱 맞는 일자리를</span>
                  <span>
                    <span className='text-test-blue font-bold'>
                      빠르고 쉽게
                    </span>{' '}
                    찾을 수 있습니다.
                  </span>
                </div>
              </div>
              <div className='bg-test-black hover:shadow-test-blue flex h-80 w-[450px] cursor-pointer items-center justify-center rounded-3xl border border-gray-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md'>
                <div className='flex flex-col items-center gap-2 text-xl'>
                  <span>
                    <span className='text-test-blue font-bold'>신속하게 </span>
                    알바를 찾고
                  </span>
                  <span>바로 일할 수 있는 기회를 제공합니다.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex h-[500px] w-full items-center justify-center bg-black text-white'>
        <article className='flex flex-col items-center gap-6'>
          <div className='border-test-green flex h-24 w-24 items-center justify-center rounded-xl border-2 text-sm text-white'>
            로고
          </div>
          <h1 className='text-test-green text-4xl'>PARTY TIME JOB</h1>
          <div className='flex flex-col items-center'>
            <p>구인구직 과정을 파티처럼 즐겁고, 더욱 쉽게 만들고자 합니다.</p>
            <p>
              당신의 다음 파티는 어디에서 시작될까요? 지금 바로 시작해 보세요!
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
