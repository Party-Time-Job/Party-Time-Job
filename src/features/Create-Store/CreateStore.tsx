import Image from 'next/image';
// import { useForm } from 'react-hook-form';
import Title from '@/shared/ui/Title';

const CreateStore = () => {
  // const { register, handleSubmit } = useForm();

  return (
    <div className='flex flex-col items-start gap-2 bg-[#FAFAFA] px-[238px] py-[60px]'>
      <div className='felx flex-col items-center gap-8'>
        <div className='flex w-[964px] items-center justify-between'>
          <Title title='가게정보'>
            <div></div>
          </Title>
          <Image src={'/close.svg'} alt='close' width={32} height={32} />
        </div>
        <form className='h-[869px] w-[964px]'>
          <label htmlFor='name'>가게 이름</label>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
