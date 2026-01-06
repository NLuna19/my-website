import ImageCard from '@/components/ui/image-card/image-card';

type HeroProps = {
  name?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroSection({
  name = 'Nicolás Omar Luna',
  title = 'Desarrollador Frontend SSR',
  description = 'Construyo experiencias web accesibles, rápidas y modernas.',
  ctaText = 'Contáctame',
  ctaHref = '/contact',
}: HeroProps) {
  const animationClasses = 'transition-all duration-1000! ease-in hover:rotate-2';

  return (
    <div className="flex h-lvh w-full flex-col">
      {/* todo: esto al layout --> esto es un header al final */}
      <section className="w-full max-w-full bg-slate-100 pt-2 pb-4 shadow-md shadow-black/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-1 md:items-center">
            <div>
              <h1 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{name}</h1>
              <h2 className="mt-0 text-xl font-extralight text-slate-800">{title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* todo: esto si se queda aca */}
      <section className="mx-auto flex max-w-6xl grow gap-8 px-6 lg:px-8">
        <div className="m-auto w-full">
          <p className="h-full max-w-xl min-w-fit bg-slate-100 px-2 py-4 text-justify text-slate-950">
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
            size={400}
            customClasses={animationClasses}
          ></ImageCard>
        </div>
      </section>
    </div>
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
