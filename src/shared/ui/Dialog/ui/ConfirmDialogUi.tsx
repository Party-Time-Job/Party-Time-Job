import Image from 'next/image';
import { ConfirmDialogUiInterface } from '@/shared/ui/Dialog/type';
import Button from '../../Button';

const ConfirmDialogUi = ({
  text,
  confirm,
  onConfirm,
}: ConfirmDialogUiInterface) => {
  return (
    <div>
      <Image src='/confirm.svg' alt='느낌표 아이콘' width={24} height={24} />
      <h3>{text}</h3>
      <Button
        text={confirm}
        size='mediumSmall'
        onClick={onConfirm}
        status='active'
      />
    </div>
  );
};

export default ConfirmDialogUi;
