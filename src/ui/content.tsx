interface HeroProps {
  children?: React.ReactNode;
  headerHeight?: number;
}

export default function ContentUI({ children, headerHeight = 0 }: HeroProps) {
  return (
    <section
      className="z-10 flex h-auto w-full flex-col"
      style={{ marginTop: headerHeight, minHeight: `calc(100lvh - ${headerHeight}px)` }}
    >
      {children}
    </section>
  );
}
