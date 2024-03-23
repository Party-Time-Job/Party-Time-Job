import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

interface MyShopProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyShop = ({ onClick }: MyShopProps) => {
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
export default MyShop;
