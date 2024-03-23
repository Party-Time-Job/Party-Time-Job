import { useForm } from 'react-hook-form';
import { LoginFormComponentProps, LoginFormProps } from '../Types.ts';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';

const LogInForm = ({ onSubmit }: LoginFormComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormProps>({ mode: 'onBlur' });

  return (
    <form
      className='mx-auto flex w-80 flex-col gap-7'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-gray-400'>
          이메일
        </label>
        <Input
          id='email'
          type='email'
          placeholder='text@email.com'
          className={errors.email && 'border-red-600'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors.email && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.email.message?.toString()}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password' className='text-gray-400'>
          비밀번호
        </label>
        <Input
          id='password'
          type='password'
          placeholder='********'
          className={errors.password && 'border-red-600'}
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상입니다.',
            },
          })}
        />
        {errors.password && (
          <p className='ml-2 text-xs text-red-600'>
            {errors.password.message?.toString()}
          </p>
        )}
      </div>
      <Button
        type='submit'
        size='large'
        text='로그인'
        disabled={isSubmitting}
        status='active'
      />
    </form>
  );
};

export default LogInForm;
