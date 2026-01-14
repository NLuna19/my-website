import HeroSection from '@/components/HeroSection';
import LocaleSwitcher from '@/components/LocalSwitcher';
import HeaderSection from '@/ui/header';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tHeader = useTranslations('Header');

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-screen items-center justify-between bg-slate-100 sm:items-start">
        <div className="flex h-lvh w-full flex-col">
          <HeaderSection title={tHeader('title')} description={tHeader('description')} />
          <LocaleSwitcher /> <HeroSection />
        </div>
      </main>
    </div>
  );
}
