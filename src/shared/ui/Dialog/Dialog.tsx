import CreatePortal from '@/features/CreatePortal';
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

/**
 *
 * @param {'accept' | 'cancel' | 'reject'} type 다이얼로그 타입
 * @param {string} text 다이얼로그 내용
 * @param {function} onAccept accept 이벤트 핸들러
 * @param {function} onCancel cancel 이벤트 핸들러
 * @returns CheckDialog
 */

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
          cancel='아니오'
          onAccept={onAccept}
          onCancel={onCancel}
        />
      </DialogContainer>
    </CreatePortal>
  );
};

/**
 *
 * @param {string} text 다이얼로그 내용
 * @param {function} onConfirm 확인 이벤트 핸들러
 * @returns ConfirmDialog
 */

export const ConfirmDialog = ({ text, onConfirm }: ConfirmDialogInterface) => {
  return (
    <CreatePortal id='dialog'>
      <DialogContainer>
        <ConfirmDialogUi text={text} confirm='확인' onConfirm={onConfirm} />
      </DialogContainer>
    </CreatePortal>
  );
};
