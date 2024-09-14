import Input from '@/shared/ui/Input';
import { CreateShopInputProps } from './model/Type.ts';

const AddressDetailSelect = ({ register, errors }: CreateShopInputProps) => {
  return (
    <div className='relative flex w-[350px] flex-shrink-0 flex-col items-start gap-2 md:w-[472px]'>
      <label htmlFor='address2'>상세 주소</label>
      <Input
        width='w-full'
        id='address2'
        type='text'
        placeholder='입력'
        {...register('address2')}
      />
      {errors.address2 && (
        <span className='absolute bottom-[-22px] left-1 text-xs text-red-500'>
          {errors.address2.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default AddressDetailSelect;
