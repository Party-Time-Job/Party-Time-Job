import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

interface MyStoreProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyStore = ({ onClick }: MyStoreProps) => {
  return (
    <div>
      <EmpolyerEmptyData
        title='내 가게'
        comment='내 가게를 소개하고 공고도 등록해 보세요'
        content='가게 등록하기'
        onClick={onClick}
      />
    </div>
  );
};
export default MyStore;
