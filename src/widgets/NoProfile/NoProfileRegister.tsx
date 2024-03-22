import { ReactNode } from 'react';

export interface NoProfileRegisterInterface {
  text: string;
  button: ReactNode;
}

const NoProfileRegister = ({ text, button }: NoProfileRegisterInterface) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-[16px] pb-[60px] pt-[60px] sm:gap-[24px]'>
      <p className='text-sm font-normal text-white sm:text-base'>{text}</p>
      <div className='w-[150px] sm:w-[346px]'>{button}</div>
    </div>
  );
};

export default NoProfileRegister;
