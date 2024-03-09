'use client';

import Button from '@/shared/Button';
import Input from '@/shared/Input';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Input value="인풋입니다." />
      <Button>로그인하기</Button>
      <Button type="primary">로그인하기</Button>
    </>
  );
}
