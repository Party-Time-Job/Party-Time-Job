/**
 * @param {string} children
 * 버튼에 들어갈 내용을 입력시면 됩니다
 * @param {string} type
 * type은 총 3가지로 approved: 승인완료, pending: 대기중, location: 위치뱃지
 * 기본값은 pendng으로 설정했습니다
 */

interface BadgeComponentProps {
  type?: string;
  text: string;
}

const Badge = ({ text, type = 'pending' }: BadgeComponentProps) => {
  return (
    <div className='flex items-start gap-1'>
      <div
        className={`${type} flex items-center justify-center rounded-[20px] px-[10px] py-[6px]`}
      >
        {text}
      </div>
    </div>
  );
};

export default Badge;
