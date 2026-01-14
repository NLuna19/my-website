import HeroSection from '@/components/HeroSection';
import LocaleSwitcher from '@/components/LocalSwitcher';
import { getLocaleFromString, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/server';
import HeaderSection from '@/ui/header';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromString(rawLocale) as Locale;

  const messages = await getMessages(locale);

  const title = messages.header?.title || 'Welcome';
  const description = messages.header?.description || 'Developer';

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-screen items-center justify-between bg-slate-100 sm:items-start">
        <div className="flex h-lvh w-full flex-col">
          <HeaderSection title={title} description={description} />

          <HeroSection />
        </div>
        <div className="fixed right-4 bottom-4">
          <LocaleSwitcher />
        </div>
      </main>
    </div>
  );
}
