interface TextComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: TextComponentProps) => {
  return <span className={className}>{children}</span>;
};

export default Text;
