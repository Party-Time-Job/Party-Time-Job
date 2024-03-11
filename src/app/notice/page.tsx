import AllNotice from '@/widgets/AllNotice';
import CustomNotice from '@/widgets/CustomNotice';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CustomNotice />
      <AllNotice />
    </div>
  );
};

export default page;
