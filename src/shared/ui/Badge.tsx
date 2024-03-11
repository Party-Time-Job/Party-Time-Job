import Text from './Text';

interface BadgeComponentProps {
  children: React.ReactNode;
  width?: string;
  color?: string;
}

const Badge = ({ children, width, color }: BadgeComponentProps) => {
  return (
    <div className={`${width} ${color}`}>
      <Text>{children}</Text>
    </div>
  );
};

export default Badge;
