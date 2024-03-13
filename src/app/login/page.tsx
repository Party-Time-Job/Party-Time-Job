'use client';

import { useForm } from 'react-hook-form';
import Input from '@/shared/ui/Input';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form
      className='flex flex-col'
      noValidate
      onSubmit={handleSubmit(data => {
        alert(JSON.stringify(data));
      })}
    >
      <label htmlFor='email'>이메일</label>
      <Input
        id='email'
        type='email'
        placeholder='text@email.com'
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식이 아닙니다.',
          },
        })}
      />
      {errors.email && <p>{errors.email.message?.toString()}</p>}
      <label htmlFor='password'>비밀번호</label>
      <Input
        id='password'
        type='password'
        placeholder='**********'
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '비밀번호는 8자 이상입니다.',
          },
        })}
      />
      {errors.password && <p>{errors.password.message?.toString()}</p>}
      <button type='submit' disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default LoginPage;
