import { Controller } from 'react-hook-form';
import Select from '@/shared/ui/Select/Select';
import CLASSIFICATION from '@/shared/constants/Classification';
import { CategorySelectType } from './model/Type.ts';

const CategorySelect = ({
  control,
  initialValues,
  errors,
}: CategorySelectType) => {
  return (
    <div className='z-20 flex w-[350px] flex-col gap-2 md:w-[472px]'>
      <div className='relative w-[100%]'>
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              type='search'
              title='분류'
              defaultValue={initialValues.category || '한식'}
              options={CLASSIFICATION}
              isRequired
              onClick={value => {
                field.onChange(value);
              }}
            />
          )}
        />
      </div>
      {errors.category && <span>{errors.category.message?.toString()}</span>}
    </div>
  );
};

export default CategorySelect;
