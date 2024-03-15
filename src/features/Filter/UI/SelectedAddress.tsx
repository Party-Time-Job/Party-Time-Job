import Image from 'next/image';

interface Props {
  address: string;
  removeAddress: (address: string) => void;
}

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
