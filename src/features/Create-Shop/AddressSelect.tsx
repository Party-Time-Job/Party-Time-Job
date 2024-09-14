import { Controller } from 'react-hook-form';
import Select from '@/shared/ui/Select/Select';
import ADDRESS from '@/shared/constants/Address';
import { CategorySelectType } from './model/Type.ts';

const AddressSelect = ({
  control,
  initialValues,
  errors,
}: CategorySelectType) => {
  return (
    <div className='z-10  flex w-[350px] flex-col gap-2 md:w-[472px]'>
      <div className='relative w-[100%]'>
        <Controller
          name='address1'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              type='search'
              title='주소'
              defaultValue={initialValues.address1 || '서울시 강동구'}
              options={ADDRESS}
              isRequired
              onClick={value => field.onChange(value)}
            />
          )}
        />
      </div>
      {errors.address1 && <span>{errors.address1.message?.toString()}</span>}
    </div>
  );
};

export default AddressSelect;
