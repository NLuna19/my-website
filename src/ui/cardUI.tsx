import { CardProps } from '@/types/cardUI';

export default function CardUI({ title, description, imageSrc, link, target }: CardProps) {
  return (
    <div className="block h-auto w-full gap-4 text-slate-950">
      <div className="rounded-lg border border-slate-400 bg-slate-100 p-4 shadow-md">
        <img src={imageSrc} alt={title} className="h-48 w-full rounded-md object-cover" />
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <p className="mt-1 h-20 overflow-auto text-slate-700">{description}</p>
        <a
          href={link}
          target={target}
          className="mt-2 inline-block text-sky-600 hover:text-sky-800"
        >
          Ver más
        </a>
      </div>
    </div>
  );
}
