import { IconType } from 'react-icons';

interface SwitcherProps {
  leftIcon: IconType;
  rightIcon: IconType;
  isOn: boolean;
  onToggle: () => void;
  size?: number;
  className?: string;
}

export default function Switcher({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isOn,
  onToggle,
  size = 20,
  className = '',
}: SwitcherProps) {
  return (
    <div
      className={`fixed right-[25px] bottom-[25px] z-50 inline-flex h-6 w-11 cursor-pointer items-center rounded-full border border-zinc-800 bg-zinc-800 transition-colors dark:bg-zinc-800 ${className}`}
      onClick={onToggle}
    >
      <div
        className={`absolute h-5 w-5 rounded-full border shadow transition-transform ${
          isOn ? 'mr-px translate-x-5' : 'ml-px translate-x-0'
        } flex items-center justify-center`}
      >
        {isOn ? <RightIcon size={size * 0.5} /> : <LeftIcon size={size * 0.5} />}
      </div>
    </div>
  );
}
