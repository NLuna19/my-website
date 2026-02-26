import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import { IconType } from 'react-icons';

interface SocialIconButtonProps {
  href: string;
  icon: IconType;
  label?: string;
  size?: number;
  className?: string;
  download?: boolean;
  target?: HTMLAttributeAnchorTarget | undefined;
}

export default function SocialIconButton({
  href,
  icon: Icon,
  label,
  size = 28,
  className = 'text-blue-600 hover:text-blue-800',
  download = false,
  target = '_blank',
}: SocialIconButtonProps) {
  return (
    <div className="group relative inline-flex">
      <Link
        href={href}
        target={target}
        aria-label={label}
        download={download}
        className={`inline-flex items-center justify-center transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${className} `}
      >
        <Icon size={size} />
      </Link>

      {/* Tooltip */}
      {label ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
