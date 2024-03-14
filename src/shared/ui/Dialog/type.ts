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
