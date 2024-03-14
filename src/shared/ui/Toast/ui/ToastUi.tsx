export type StatusInterface = 'appear' | 'disappear';

export interface ToastUiInterface {
  status: StatusInterface;
  children: string;
}
