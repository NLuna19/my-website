import ImageCard from '@/ui/image-card';

export default function HeroSection() {
  const animationClasses = 'transition-all duration-1000! ease-in hover:rotate-2';

  return (
    <section className="mx-auto flex min-h-[inherit] max-w-6xl flex-col-reverse justify-end gap-4 px-8 pt-2 md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:gap-8 md:pt-0 lg:px-20">
      <div className="col-span-2 mx-auto w-full">
        <p
          className="h-full max-w-xl min-w-fit bg-slate-100 text-slate-950 md:text-end"
          style={{ transform: '' }}
        >
          <span className="block px-1 text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            Construyo experiencias web accesibles, rápidas y modernas.
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
