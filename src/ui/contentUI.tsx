interface ContentProps {
  children?: React.ReactNode;
  headerHeight?: number;
}

export default function ContentUI({ children, headerHeight = 0 }: ContentProps) {
  return (
    <section
      className="z-10 flex h-auto w-full flex-col items-center gap-2 px-6 pt-2 md:px-12 md:pt-0 lg:px-22"
      style={{
        marginTop: headerHeight,
        minHeight: `calc(100lvh - ${headerHeight}px)`,
      }}
    >
      {children}
    </section>
  );
}
