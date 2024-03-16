import { ReactNode } from 'react';

export interface NoProfileRegisterInterface {
  text: string;
  button: ReactNode;
}

const NoProfileRegister = ({ text, button }: NoProfileRegisterInterface) => {
  return (
    <div className='rounded-12px] flex w-full flex-col items-center justify-center gap-[24px] border border-solid border-[#e5e4e7] pb-[60px] pt-[60px] md:gap-[16px]'>
      <p className='text-base font-normal text-black md:text-sm md:font-normal'>
        {text}
      </p>
      <div className='w-[346px] md:w-auto'>{button}</div>
    </div>
  );
};

export default NoProfileRegister;
