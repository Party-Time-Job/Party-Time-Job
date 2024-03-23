export const TableHeadRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr className='h-[40px] bg-test-black text-left text-xs font-normal leading-[40px] sm:h-[50px] sm:text-sm sm:leading-[50px]'>
        {children}
      </tr>
    </thead>
  );
};

export const TableHeadCell = ({ children }: { children: React.ReactNode }) => {
  return <th className='pl-3 sm:pl-2'>{children}</th>;
};
