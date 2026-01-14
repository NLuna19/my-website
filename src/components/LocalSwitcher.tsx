'use client';

import { Link, usePathname } from '@/navigation';

export default function LocaleSwitcher() {
  const pathname = usePathname();

  // Quita el locale del path
  const pathWithoutLocale = pathname.replace(/^\/(es|en)(\/|$)/, '/');

  return (
    <nav className="text-black">
      <Link href={pathWithoutLocale} locale="es">
        ES
      </Link>
      {' | '}
      <Link href={pathWithoutLocale} locale="en">
        EN
      </Link>
    </nav>
  );
}
