import AlertModal from '@/entities/AlertModal';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <AlertModal modaltext="안녕하세요?" buttontext="안녕" />
    </>
  );
}
