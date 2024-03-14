import Image from 'next/image';

interface Props {
  sortCategory: string;
  handleToggleSort: () => void;
}

/**
 * @param {Object} props - SortSelect 컴포넌트의 props
 * @param {string} props.sortCategory - 정렬 방식
 * @param {Function} props.handleToggleSort - 토글 상태 업데이트
 * @returns 정렬 방식 선택 버튼
 */
const SortSelect = ({ sortCategory, handleToggleSort }: Props) => {
  return (
    <button
      className='flex h-[30px] items-center justify-center gap-[6px] rounded-[5px] bg-pt-gray30 p-[12px]'
      onClick={handleToggleSort}
    >
      <span className='text-[14px] font-bold'>{sortCategory}</span>
      <Image src={'/dropdown.svg'} alt='image' width={10} height={10} />
    </button>
  );
};

export default SortSelect;
