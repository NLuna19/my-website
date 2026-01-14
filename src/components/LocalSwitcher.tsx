'use client';

import { useI18n } from '@/i18n/client';
import { LOCALES, LOCALE_NAMES } from '@/i18n/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

type DropdownPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? '/';
  const { locale: currentLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<DropdownPosition>('bottom-right');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '$1') || '/';

  const buildLocaleHref = (newLocale: string): string => {
    return `/${newLocale}${pathWithoutLocale}`;
  };

  // Detectar mejor posición para el dropdown
  const determinePosition = () => {
    if (!buttonRef.current || !dropdownRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let newPosition: DropdownPosition = 'bottom-right';

    // Comprobar espacio vertical
    const spaceBelow = viewportHeight - (buttonRect.bottom + 8);
    const spaceAbove = buttonRect.top - 8;
    const dropdownHeight = dropdownRect.height || 250;

    // Comprobar espacio horizontal
    const spaceRight = viewportWidth - (buttonRect.right + 8);
    const spaceLeft = buttonRect.left - 8;
    const dropdownWidth = dropdownRect.width || 200;

    const canShowBelow = spaceBelow >= dropdownHeight;
    const canShowAbove = spaceAbove >= dropdownHeight;
    const canShowRight = spaceRight >= dropdownWidth;
    const canShowLeft = spaceLeft >= dropdownWidth;

    // Prioridad: mostrar hacia donde hay más espacio
    if (canShowBelow && canShowRight) newPosition = 'bottom-right';
    else if (canShowBelow && canShowLeft) newPosition = 'bottom-left';
    else if (canShowAbove && canShowRight) newPosition = 'top-right';
    else if (canShowAbove && canShowLeft) newPosition = 'top-left';
    else if (canShowBelow) newPosition = 'bottom-right';
    else if (canShowAbove) newPosition = 'top-right';

    setPosition(newPosition);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current &&
        dropdownRef.current &&
        !buttonRef.current.contains(target) &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Calcular posición después de que se renderice
      setTimeout(determinePosition, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Recalcular posición cuando se redimensiona la ventana
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      determinePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const getPositionClasses = (): string => {
    const baseClasses =
      'absolute mt-2 rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900';

    switch (position) {
      case 'top-left':
        return `${baseClasses} bottom-full right-0 mb-2`;
      case 'top-right':
        return `${baseClasses} bottom-full left-0 mb-2`;
      case 'bottom-left':
        return `${baseClasses} top-full right-0 mt-2`;
      case 'bottom-right':
      default:
        return `${baseClasses} top-full left-0 mt-2`;
    }
  };

  return (
    <div className="relative">
      {/* Botón flotante con ícono planeta */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center rounded-full border-2 border-slate-300 bg-white p-3 transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:border-slate-600 dark:bg-slate-800 dark:hover:border-slate-500 ${
          isOpen ? 'shadow-lg' : 'shadow-md'
        }`}
        aria-label="Toggle language menu"
        aria-expanded={isOpen}
        title="Change language"
      >
        <FiGlobe className="h-5 w-5 text-slate-700 transition-transform duration-300 group-hover:rotate-12 dark:text-slate-200" />
      </button>

      {/* Dropdown de idiomas */}
      {isOpen && (
        <div ref={dropdownRef} className={`z-50 min-w-max overflow-hidden ${getPositionClasses()}`}>
          {/* Header del dropdown */}
          <div className="border-b border-slate-200 px-4 py-2 dark:border-slate-700">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Language
            </p>
          </div>

          {/* Lista de idiomas */}
          <div className="py-1">
            {LOCALES.map((locale) => {
              const isActive = currentLocale === locale;
              const displayName = LOCALE_NAMES[locale as 'es' | 'en'];

              return (
                <Link
                  key={locale}
                  href={buildLocaleHref(locale)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Indicador de selección */}
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                  {!isActive && <span className="h-2 w-2" />}

                  {/* Nombre del idioma */}
                  <span className="flex-1">{displayName}</span>

                  {/* Código del idioma */}
                  <span className="text-xs opacity-60">{locale.toUpperCase()}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
