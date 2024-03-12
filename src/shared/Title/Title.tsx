import { TitleInterface } from '@/shared/Title/type';

const Title = ({
  title,
  align = 'start',
  size = 28,
  subtitle,
  subSize = 16,
  gap = 0,
  children,
}: TitleInterface) => {
  return (
    <div>
      {subtitle && <h2 style={{ fontSize: subSize }}>{subtitle}</h2>}
      <h1 style={{ textAlign: align, fontSize: size, marginBottom: gap }}>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Title;
