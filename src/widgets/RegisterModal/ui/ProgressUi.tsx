const ProgressUi = ({
  current,
  entire,
}: {
  current: string;
  entire: string[];
}) => {
  const steps = entire.indexOf(current);
  const progress = (steps / (entire.length - 1)) * 100;

  return (
    <div className='relative mx-auto mb-[5px] mt-0 h-[8px] w-[98%] overflow-hidden rounded bg-[#cbc9cf]'>
      <div
        style={{ width: `${progress}%` }}
        className='h-full rounded bg-[#6b8a8c] duration-300 ease-in-out'
      />
    </div>
  );
};

export default ProgressUi;
