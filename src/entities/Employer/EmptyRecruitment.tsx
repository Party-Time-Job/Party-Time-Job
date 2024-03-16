import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

const RegisteredRecruitment = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <EmpolyerEmptyData
        title='등록한 공고'
        comment='공고를 등록해 보세요'
        content='공고 등록하기'
        onClick={onClick}
      />
    </div>
  );
};

export default RegisteredRecruitment;
