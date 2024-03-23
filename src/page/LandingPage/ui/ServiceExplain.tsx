import Text from '@/shared/ui/Text';

const ServiceExplain = () => {
  return (
    <>
      <div className='hidden flex-col items-center lg:flex'>
        <Text as='p'>
          구인구직 과정을 파티처럼 즐겁고, 더욱 쉽게 만들고자 합니다.
        </Text>
        <Text as='p'>
          당신의 다음 파티는 어디에서 시작될까요? 지금 바로 시작해 보세요!
        </Text>
      </div>

      <div className='flex flex-col items-center gap-2 text-center lg:hidden'>
        <Text as='p'>
          구인구직 과정을 파티처럼 즐겁고
          <br />
          더욱 쉽게 만들고자 합니다.
        </Text>
        <Text as='p'>
          당신의 다음 파티는 어디에서 시작될까요?
          <br />
          지금 바로 시작해 보세요!
        </Text>
      </div>
    </>
  );
};
export default ServiceExplain;
