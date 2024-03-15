import Image from 'next/image';

interface Props {
  address: string;
  removeAddress: (address: string) => void;
}

/**
 * @param {Object} props - SelectedAddress 컴포넌트의 props
 * @param {string} props.address - 선택된 주소
 * @param {Function} props.removeAddress - 선택된 주소 리스트에서 제거하는 콜백함수
 * @returns 주소를 선택하면 나오는 UI
 */
const SelectedAddress = ({ address, removeAddress }: Props) => {
  return (
    <div className='flex items-center justify-center gap-[4px] rounded-[20px] bg-pt-green40 px-[10px] py-[6px]'>
      <span className='text-[14px] font-bold text-white'>{address}</span>
      <Image
        src={'/close-white.svg'}
        alt='close'
        width='16'
        height='16'
        className='cursor-pointer'
        onClick={() => removeAddress(address)}
      />
    </div>
  );
};

export default SelectedAddress;
