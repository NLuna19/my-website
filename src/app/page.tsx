'use client';

import HeroSection from '@/components/hero/hero-section';
import { CardProps } from '@/types/cardUI';
import { sectionIds } from '@/types/sections';
import ContentUI from '@/ui/contentUI';
import GridUI from '@/ui/gridUI';
import HeaderSection from '@/ui/header';
import { useState } from 'react';

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const gridCardData: CardProps[] = [
    {
      title: 'Angular Basic CRUD',
      description:
        'Aplicación Angular que implementa CRUD completo. Permite crear, leer, actualizar y eliminar registros de forma profesional y escalable.',
      imageSrc: './ng-image.jpg',
      link: 'https://github.com/NLuna19/AngularBasicCRUD',
      target: '_blank',
    },
    {
      title: 'TaskFlow',
      description: 'API REST de Gestión de Tareas. Realizado en .NET 8 y C#',
      imageSrc: './Microsoft_.NET_logo.svg',
      link: 'https://github.com/NLuna19/TaskFlow',
      target: '_blank',
    },
    {
      title: 'Superheroes Challenge',
      description:
        'Desarrollo en Angular utilizando una API, con axios para consumir datos de superhéroes. El proyecto se centra en la creación de una interfaz de usuario atractiva y funcional, que permita a los usuarios explorar y obtener información sobre sus superhéroes favoritos.',
      imageSrc: './ng-image.jpg',
      link: 'https://github.com/NLuna19/superheroes-challenge',
      target: '_blank',
    },
    {
      title: 'Facility Goloso',
      description:
        'Trabajo practico Universitario que implementa un algoritmo Goloso como solucion del problema de Facility Location. Realizado en Java',
      imageSrc: './java-4-logo.jpg',
      link: 'https://github.com/NLuna19/facility_goloso',
      target: '_blank',
    },
  ];

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
        className="flex min-h-screen w-full max-w-screen flex-col items-center justify-between bg-slate-100 sm:items-start"
      >
        <HeaderSection
          title="Nicolas Omar Luna"
          description="Desarrollador Full Stack"
          setHeaderHeight={setHeaderHeight}
        />

        <ContentUI headerHeight={headerHeight}>
          <HeroSection id={sectionIds.hero} />

          <div id={sectionIds.projects} style={{ height: headerHeight, width: '100%' }}></div>
          <GridUI
            gridItems={gridCardData}
            classNames={{
              content: 'min-h-[inherit]',
            }}
          />
        </ContentUI>

        <footer className="mt-4 w-full bg-slate-800 text-slate-200">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center">
              © 2026{' '}
              <a href="https://github.com/NLuna19" target="_blank">
                Nicolas Omar Luna
              </a>
              . Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
