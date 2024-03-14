import Image from 'next/image';

interface Props {
  sortCategory: string;
  handleToggle: () => void;
}

const SortSelect = ({ sortCategory, handleToggle }: Props) => {
  return (
    <button
      className='flex h-[30px] items-center justify-center gap-[6px] rounded-[5px] bg-pt-gray30 p-[12px]'
      onClick={handleToggle}
    >
      <span className='text-[14px] font-bold'>{sortCategory}</span>
      <Image src={'/dropdown.svg'} alt='image' width={10} height={10} />
    </button>
  );
};

export default SortSelect;
