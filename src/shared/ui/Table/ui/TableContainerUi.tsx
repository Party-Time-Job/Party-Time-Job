import React from 'react';

const TableContainerUi = ({
  children,
  pagination,
}: {
  children: React.ReactNode;
  pagination: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <table>{children}</table>
      </div>
      {pagination}
    </div>
  );
};

export default TableContainerUi;
