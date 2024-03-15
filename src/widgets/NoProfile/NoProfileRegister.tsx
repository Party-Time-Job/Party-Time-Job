import { ReactNode } from 'react';

export interface NoProfileRegisterInterface {
  text: string;
  button: ReactNode;
}

const NoProfileRegister = ({ text, button }: NoProfileRegisterInterface) => {
  return (
    <div>
      <p>{text}</p>
      <div>{button}</div>
    </div>
  );
};

export default NoProfileRegister;
