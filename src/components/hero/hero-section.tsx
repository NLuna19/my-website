import ImageCard from '@/ui/image-card';

export default function HeroSection() {
  const animationClasses = 'transition-all duration-1000! ease-in hover:rotate-2';

  return (
    <section className="mx-auto flex min-h-[inherit] max-w-6xl gap-8 px-6 lg:px-8">
      <div className="m-auto w-full">
        <p
          className="h-full max-w-xl min-w-fit bg-slate-100 px-2 py-4 text-justify text-slate-950"
          style={{ transform: 'scale(0.85)' }}
        >
          <span className="block text-9xl tracking-wider">Construyo</span>
          <span className="block px-1 text-[4.625rem]/[1]">
            experiencias web accesibles, rápidas y modernas.
          </span>
        </p>
      </div>
      <div className="flex max-h-full items-center justify-center">
        <ImageCard
          imgSrc="./photo.jpg"
          alt="photo"
          size={375}
          customClasses={animationClasses}
        ></ImageCard>
      </div>
    </section>
  );
}
{
  /* 

            <div className="mt-8 flex gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500"
              >
                {ctaText}
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Ver proyectos
              </Link>

              <DownloadCVButton />
            </div> */
}
