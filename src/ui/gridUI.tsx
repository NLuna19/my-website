import { CardProps } from '@/types/cardUI';
import CardUI from './cardUI';

interface GridClassNames {
  content: string;
}

interface GridProps {
  id?: string;
  classNames?: GridClassNames;
  gridItems?: CardProps[];
}

export default function GridUI({ id, gridItems = [], classNames }: GridProps) {
  return (
    <div
      id={id}
      className={`-mx-2 mt-2 flex flex-wrap text-slate-950 ${classNames?.content ?? ''}`}
    >
      {gridItems.length > 0 ? (
        gridItems.map((item, index) => (
          <div
            id={index === 0 ? id : undefined}
            className="max-h-fit w-full px-2 pb-4 sm:basis-1/2 lg:basis-1/3"
            key={index}
          >
            <CardUI
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              link={item.link}
            ></CardUI>
          </div>
        ))
      ) : (
        <div className="col-span-full basis-full text-center text-slate-500">
          No hay elementos para mostrar
        </div>
      )}
    </div>
  );
}
