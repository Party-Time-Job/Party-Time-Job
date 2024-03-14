import Image from 'next/image';
import { CheckDialogUiInterface } from '@/shared/ui/Dialog/type';
import Button from '../../Button';

const CheckDialogUi = ({
  text,
  accept,
  cancel,
  onAccept,
  onCancel,
}: CheckDialogUiInterface) => {
  return (
    <div>
      <Image src='/check.svg' alt='체크 아이콘' width={24} height={24} />
      <h3>{text}</h3>
      <div>
        <Button
          text={cancel}
          size='mediumSmall'
          onClick={onCancel}
          status='active'
        />
        <Button
          text={accept}
          size='mediumSmall'
          onClick={onAccept}
          status='active'
        />
      </div>
    </div>
  );
};

export default CheckDialogUi;
