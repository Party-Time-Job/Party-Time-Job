import CreatePortal from '@/features/Filter/CreatePortal';
import DialogContainer from '@/shared/ui/Dialog/ui/DialogContainer';
import ConfirmDialogUi from '@/shared/ui/Dialog/ui/ConfirmDialogUi';
import CheckDialogUi from '@/shared/ui/Dialog/ui/CheckDialogUi';
import {
  CheckDialogInterface,
  CheckType,
  ConfirmDialogInterface,
} from '@/shared/ui/Dialog/type';

const options = {
  accept: '승인',
  cancel: '취소',
  reject: '거절',
};

export const CheckDialog = ({
  type,
  text,
  onAccept,
  onCancel,
}: CheckDialogInterface) => {
  return (
    <CreatePortal id='dialog'>
      <DialogContainer>
        <CheckDialogUi
          text={text}
          accept={options[type as CheckType]}
          cancel='아니요'
          onAccept={onAccept}
          onCancel={onCancel}
        />
      </DialogContainer>
    </CreatePortal>
  );
};

export const Dialog = ({ text, onConfirm }: ConfirmDialogInterface) => {
  return (
    <CreatePortal id='dialog'>
      <DialogContainer>
        <ConfirmDialogUi text={text} confirm='확인' onConfirm={onConfirm} />
      </DialogContainer>
    </CreatePortal>
  );
};
