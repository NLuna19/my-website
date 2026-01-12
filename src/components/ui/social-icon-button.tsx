import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocialIconButtonProps {
  href: string;
  icon: IconType;
  label: string;
  size?: number;
  className?: string;
}

export default function SocialIconButton({
  href,
  icon: Icon,
  label,
  size = 28,
  className = 'text-blue-600 hover:text-blue-800',
}: SocialIconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className={`transition-transform hover:scale-110 ${className}`}
    >
      <Icon size={size} />
    </Link>
  );
}
