export const TableHeadRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export const TableHeadCell = ({ children }: { children: React.ReactNode }) => {
  return <th>{children}</th>;
};
