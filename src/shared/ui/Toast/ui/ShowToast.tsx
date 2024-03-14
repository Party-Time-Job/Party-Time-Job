'use client';

import { useEffect, useState } from 'react';
import ToastUi, { StatusInterface } from './ToastUi';

/**
 * @param {function} onShow 토스트 보여주는 이벤트 핸들러
 * @param {string} children 토스트에 보여줄 텍스트
 * @return 토스트
 */

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
