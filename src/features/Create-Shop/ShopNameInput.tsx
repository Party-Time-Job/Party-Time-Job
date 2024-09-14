import Input from '@/shared/ui/Input';
import { CreateShopInputProps } from './model/Type.ts';

const ShopNameInput = ({ register, errors }: CreateShopInputProps) => {
  return (
    <div className='relative flex w-[350px] flex-col gap-2 md:w-[472px]'>
      <label htmlFor='name'>가게 이름 *</label>
      <Input
        width='w-[100%]'
        id='name'
        type='text'
        placeholder='입력'
        {...register('name', {
          required: '가게 이름 입력은 필수 입니다.',
        })}
      />
      {errors.name && (
        <span className='absolute bottom-[-22px] left-1 text-xs text-red-500'>
          {errors.name.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default ShopNameInput;
