import CreatePortal from '@/features/Filter/CreatePortal';
import ShowToast from './ui/ShowToast';

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
