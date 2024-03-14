export type StatusInterface = 'appear' | 'disappear';

export interface ToastUiInterface {
  status: StatusInterface;
  children: string;
}

const ToastUi = ({ status, children }: ToastUiInterface) => {
  return <div className={`${status}`}>{children}</div>;
};

export default ToastUi;
