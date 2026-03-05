'use client';

import HeroSection from '@/components/hero/hero-section';
import { CardProps } from '@/types/cardUI';
import { sectionIds } from '@/types/sections';
import ContentUI from '@/ui/contentUI';
import GridUI from '@/ui/gridUI';
import HeaderSection from '@/ui/header';
import Switcher from '@/ui/switcher';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const gridCardData: CardProps[] = [
    {
      title: 'Nicolas Luna Portfolio',
      description: 'Este Portfolio Web. Desarrollado en Next.Js',
      imageSrc: './react.jpg',
      link: 'https://github.com/NLuna19/my-website',
      target: '_blank',
    },
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

  const darkModeToggle = () => {
    document.getElementsByTagName('html')[0].classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setIsDarkMode(document.getElementsByTagName('html')[0].classList.contains('dark'));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-slate-950 dark:text-slate-300">
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
        className="flex min-h-screen w-full max-w-screen flex-col items-center justify-between bg-slate-100 antialiased sm:items-start dark:bg-zinc-900"
      >
        <HeaderSection
          title="Nicolas Omar Luna"
          description="Desarrollador Full Stack"
          setHeaderHeight={setHeaderHeight}
        />
        <ContentUI headerHeight={headerHeight}>
          <Switcher
            leftIcon={FaSun}
            rightIcon={FaMoon}
            isOn={isDarkMode}
            onToggle={() => {
              darkModeToggle();
            }}
          />

          <HeroSection id={sectionIds.hero} />

          <GridUI
            id={sectionIds.projects}
            title="Proyectos Destacados"
            gridItems={gridCardData}
            headerHeight={headerHeight}
            classNames={{
              content: 'min-h-[inherit]',
            }}
          />
        </ContentUI>

        <footer className="mt-4 w-full border-t border-zinc-800 bg-zinc-900 text-zinc-400">
          <div className="container mx-auto px-4 pt-2 pb-3 text-xs">
            <p className="text-center">
              © 2026
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
