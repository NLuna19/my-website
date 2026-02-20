import DownloadCVButton from '@/shared/components/download-cv-button';
import GitHubButton from '@/shared/components/github-button';
import LinkedInIcon from '@/shared/components/linkedin-button';
import { useEffect, useRef } from 'react';

interface HeaderSectionProps {
  title: string;
  description: string;
  setHeaderHeight: (height: number) => void;
}

export default function HeaderSection({ title, description, setHeaderHeight }: HeaderSectionProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [setHeaderHeight]);

  return (
    <section
      ref={headerRef}
      className="fixed z-10 w-full max-w-full bg-slate-100 pt-2 pb-4 shadow-md shadow-black/20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-10 flex flex-col justify-start">
            <h1 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{title}</h1>
            <h2 className="mt-0 text-xl font-extralight text-slate-800">{description}</h2>
          </div>
          <div className="col-span-2 flex h-full items-end justify-end gap-2">
            <DownloadCVButton />
            <GitHubButton />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
