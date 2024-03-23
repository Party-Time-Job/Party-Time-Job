import Image from 'next/image';
import convertSortText from './utils/convertSortText.ts';

interface Props {
  sortCategory: string;
  handleToggleSort: () => void;
  isToggleSort: boolean;
}

/**
 * @param {Object} props - SortSelect 컴포넌트의 props
 * @param {string} props.sortCategory - 정렬 방식
 * @param {Function} props.handleToggleSort - 토글 상태 업데이트
 * @param {Function} props.isToggleSort - 토글 상태
 * @returns 정렬 방식 선택 버튼
 */
const SortSelect = ({
  sortCategory,
  handleToggleSort,
  isToggleSort,
}: Props) => {
  return (
    <button
      className='flex h-[30px] items-center justify-center gap-[6px] rounded-[5px] bg-test-black p-[12px] text-white'
      onClick={handleToggleSort}
    >
      <span className='text-[14px] font-light'>
        {convertSortText(sortCategory)}
      </span>
      <Image
        src={'/dropdown.svg'}
        alt='image'
        width={10}
        height={10}
        style={{
          transform: isToggleSort ? 'rotate(-180deg)' : 'none',
          transition: 'transform 0.2s ease',
        }}
      />
    </button>
  );
};

export default SortSelect;
