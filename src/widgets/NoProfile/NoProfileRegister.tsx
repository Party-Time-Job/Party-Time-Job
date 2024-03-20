import { ReactNode } from 'react';

export interface NoProfileRegisterInterface {
  text: string;
  button: ReactNode;
}

const NoProfileRegister = ({ text, button }: NoProfileRegisterInterface) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-[24px] rounded-[12px] border border-solid border-[#e5e4e7] pb-[60px] pt-[60px]'>
      <p className='text-base font-normal text-black'>{text}</p>
      <div className='w-[346px]'>{button}</div>
    </div>
  );
};

export default NoProfileRegister;
