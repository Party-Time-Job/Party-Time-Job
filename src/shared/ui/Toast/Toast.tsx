import CreatePortal from '@/features/Filter/CreatePortal';
import ShowToast from './ui/ShowToast';

/**
 * @param {function} onShow 토스트 보여주는 이벤트 핸들러
 * @param {string} children 토스트에 보여줄 텍스트
 * @return 토스트
 */

export interface ToastInterface {
  onShow: () => void;
  children: string;
}

const Toast = ({ onShow, children }: ToastInterface) => {
  return (
    <CreatePortal id='toast'>
      <ShowToast onShow={onShow}>{children}</ShowToast>
    </CreatePortal>
  );
};

export default Toast;
