import React from 'react';

const TableContainerUi = ({
  children,
  pagination,
}: {
  children: React.ReactNode;
  pagination: React.ReactNode;
}) => {
  return (
    <div className='relative w-full max-w-[964px] overflow-hidden rounded-[10px] border border-solid border-[#cbc9cf] bg-white'>
      <div className='overflow-x-auto'>
        <table className='first-table w-[801px] sm:w-[962px]'>{children}</table>
      </div>
      {pagination}
    </div>
  );
};

export default TableContainerUi;
