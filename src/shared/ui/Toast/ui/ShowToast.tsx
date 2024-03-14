import { useEffect, useState } from 'react';
import ToastUi, { StatusInterface } from './ToastUi';

export interface ShowToastInterface {
  onShow: () => void;
  children: string;
}

const ShowToast = ({ onShow, children }: ShowToastInterface) => {
  const [effect, setEffect] = useState<StatusInterface>('appear');

  useEffect(() => {
    const duration = setTimeout(() => {
      onShow();
    }, 2500);
    const disappearTime = setTimeout(() => {
      setEffect('disappear');
    }, 1500);
    return () => {
      clearTimeout(duration);
      clearTimeout(disappearTime);
    };
  }, []);

  return <ToastUi status={effect}>{children}</ToastUi>;
};

export default ShowToast;
