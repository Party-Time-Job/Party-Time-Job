import React from 'react';

export interface DialogContainerInterface {
  children: React.ReactNode;
}

const DialogContainer = ({ children }: DialogContainerInterface) => {
  return (
    <div className='fixed inset-0 flex h-screen w-screen flex-col items-center justify-center bg-black shadow-md'>
      {children}
    </div>
  );
};

export default DialogContainer;
