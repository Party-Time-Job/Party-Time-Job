export interface ConfirmDialogUiInterface {
  text: string;
  confirm: string;
  onConfirm: () => void;
}

export interface CheckDialogUiInterface {
  text: string;
  accept: string;
  cancel: string;
  onAccept: () => void;
  onCancel: () => void;
}

export interface ConfirmDialogInterface {
  text: string;
  onConfirm: () => void;
}

export type CheckType = 'accept' | 'cancel' | 'reject';

export interface CheckDialogInterface {
  type: CheckType;
  text: string;
  onAccept: () => void;
  onCancel: () => void;
}
