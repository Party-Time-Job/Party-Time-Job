'use client';

import Button from '@/shared/Button';
import Input from '@/shared/Input';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Input width="w-80" />
      <div>
        <Button size="large">로그인하기</Button>
        <Button type="active" size="large">
          로그인하기
        </Button>
        <Button type="negative" size="large">
          신청불가
        </Button>
      </div>
      <div>
        <Button size="medium">로그인하기</Button>
        <Button type="active" size="medium">
          로그인하기
        </Button>
        <Button type="negative" size="medium">
          신청불가
        </Button>
      </div>
      <div>
        <Button size="small">로그인하기</Button>
        <Button type="active" size="small">
          로그인하기
        </Button>
        <Button type="negative" size="small">
          신청불가
        </Button>
      </div>
    </>
  );
}
