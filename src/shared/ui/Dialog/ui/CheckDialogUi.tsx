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
    <div className='fixed left-2/4 top-2/4 flex w-[298px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-stretch rounded-xl bg-white p-6'>
      <Image
        src='/check.svg'
        alt='체크 아이콘'
        width={24}
        height={24}
        className='mb-4'
      />
      <h3 className='mb-8 text-base font-normal'>{text}</h3>
      <div className='flex gap-2'>
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
