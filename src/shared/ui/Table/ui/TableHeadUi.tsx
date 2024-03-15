export const TableHeadRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr className='h-[50px] border-b border-b-[#cbc9cf] bg-[#ffebe7] text-left text-sm font-normal leading-[50px] md:h-[40px] md:text-xs md:font-normal md:leading-[40px]'>
        {children}
      </tr>
    </thead>
  );
};

export const TableHeadCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <th className='pl-3 odd:w-[200px] even:w-[280px] md:pl-2 md:odd:w-[170px] md:even:w-[230px]'>
      {children}
    </th>
  );
};
