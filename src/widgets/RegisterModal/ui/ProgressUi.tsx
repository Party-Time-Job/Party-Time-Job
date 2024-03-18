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
    <div>
      <div style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressUi;
