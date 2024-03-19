export const TableHeadRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr className='h-[50px] border-b border-b-[#cbc9cf] bg-[#ffebe7] text-left text-sm font-normal leading-[50px]'>
        {children}
      </tr>
    </thead>
  );
};

export const TableHeadCell = ({ children }: { children: React.ReactNode }) => {
  return <th className='pl-3'>{children}</th>;
};
