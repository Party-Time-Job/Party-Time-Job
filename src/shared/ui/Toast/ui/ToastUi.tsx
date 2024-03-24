export type StatusInterface = 'appear' | 'disappear';

export interface ToastUiInterface {
  status: StatusInterface;
  children: string;
}

const ToastUi = ({ status, children }: ToastUiInterface) => {
  return (
    <div
      className={`${status === 'appear' ? 'appear' : 'disappear'} transform-fade fixed left-2/4 top-2/4 z-[100] inline-block rounded-[5px] border border-test-green bg-test-black px-4 py-2.5 text-base font-normal leading-[26px] text-white`}
    >
      {children}
    </div>
  );
};

export default ToastUi;
