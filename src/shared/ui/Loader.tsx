import CreatePortal from '@/features/CreatePortal';

const Loader = () => {
  return (
    <CreatePortal id='loader'>
      <div className='fixed top-0 flex h-full w-full items-center justify-center bg-black'>
        <div className='relative inline-block h-[80px] w-[80px]'>
          <div className='absolute left-[66px] top-[37px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[62px] top-[22px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[52px] top-[11px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[37px] top-[7px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[22px] top-[11px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[11px] top-[22px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[7px] top-[37px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[11px] top-[52px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[22px] top-[62px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[37px] top-[66px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[52px] top-[62px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
          <div className='absolute left-[62px] top-[52px] h-1.5 w-1.5 animate-[scale_1.2s_linear_infinite] rounded-[50%] bg-green-400' />
        </div>
      </div>
    </CreatePortal>
  );
};

export default Loader;
