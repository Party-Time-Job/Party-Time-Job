interface Props {
  text: string;
}

const ClosedNoticeImage = ({ text }: Props) => {
  return (
    <div className='absolute flex h-full w-full items-center justify-center bg-black bg-opacity-70'>
      <span className='text-[28px] font-bold text-[#CBC9CF]'>{text}</span>
    </div>
  );
};

export default ClosedNoticeImage;
