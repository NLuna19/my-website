'use client';

import HeroSection from '@/components/hero/hero-section';
import ContentUI from '@/ui/content';
import HeaderSection from '@/ui/header';
import { useState } from 'react';

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main
        // style={{
        //   backgroundImage: 'url("work_in_progress-wallpaper-1600x900.jpg")',
        //   backgroundClip: 'border-box',
        //   backgroundAttachment: 'fixed',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        //   backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //   backgroundBlendMode: 'darken',
        // }}
        className="flex min-h-screen w-full max-w-screen items-center justify-between bg-slate-100 sm:items-start"
      >
        <HeaderSection
          title="Nicolas Omar Luna"
          description="Desarrollador Full Stack"
          setHeaderHeight={setHeaderHeight}
        />

        <ContentUI headerHeight={headerHeight}>
          <HeroSection />
        </ContentUI>
      </main>
    </div>
  );
}
