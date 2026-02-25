type ImageCardProps = {
  imgSrc: string;
  alt?: string;
  size?: number;
  customClasses?: string;
  forceMinSize?: boolean;
};

export default function ImageCard({
  imgSrc,
  alt = '',
  size = 200,
  customClasses,
  forceMinSize = false,
}: ImageCardProps) {
  return (
    <div
      className={`mx-auto h-fit w-fit overflow-hidden border shadow-md shadow-black/30 md:shadow-2xl ${customClasses}`}
      style={{
        border: `${size < 200 ? 2 : size * 0.01}px solid white`,
        ...(forceMinSize
          ? {
              minWidth: `${size}px`,
              minHeight: `${size}px`,
            }
          : {}),
      }}
    >
      {imgSrc && <img src={imgSrc} alt={alt || 'image'} width={size} height={size} />}
    </div>
  );
}
