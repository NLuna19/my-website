interface HeroProps {
  children?: React.ReactNode;
  headerHeight?: number;
}

export default function ContentUI({ children, headerHeight = 0 }: HeroProps) {
  return (
    <section
      className="flex h-auto w-full flex-col"
      style={{ marginTop: headerHeight, minHeight: `calc(100lvh - ${headerHeight}px)` }}
    >
      {children}
    </section>
  );
}
