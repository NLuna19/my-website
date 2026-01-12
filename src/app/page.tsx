import HeroSection from '@/components/hero/hero-section';
import HeaderSection from '@/ui/header';

export default function Home() {
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
        <div className="flex h-lvh w-full flex-col">
          <HeaderSection title="Nicolas Omar Luna" description="Desarrollador Full Stack" />
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
