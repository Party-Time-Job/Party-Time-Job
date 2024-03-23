import Image from 'next/image';
import { ConfirmDialogUiInterface } from '@/shared/ui/Dialog/type';
import Button from '../../Button';

const ConfirmDialogUi = ({
  text,
  confirm,
  onConfirm,
}: ConfirmDialogUiInterface) => {
  return (
    <div className='fixed left-2/4 top-2/4 flex w-[298px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-stretch rounded-xl bg-white p-6'>
      <Image
        src='/confirm.svg'
        alt='느낌표 아이콘'
        width={24}
        height={24}
        className='mb-4'
      />
      <h3 className='mb-8 text-base font-normal'>{text}</h3>
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
