import { Options, SelectUiInterface } from '@/shared/ui/Select/type';

const SelectUi = ({
  type,
  title,
  isOpen = false,
  ref,
  options,
  dropDown,
  onClick,
  children,
}: SelectUiInterface & Options) => {
  return (
    <div>
      <div ref={ref}>
        {type === 'search' && title && <div>{title}</div>}
        <button type='button' onClick={dropDown}>
          {children}
        </button>
      </div>
      <div>
        <div>
          {isOpen && (
            <ul>
              {options.map(option => (
                <li key={option.value}>
                  <button type='button' onClick={() => onClick(option.value)}>
                    {option.value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectUi;
