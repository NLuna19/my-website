type ImageCardProps = {
  imgSrc: string;
  alt?: string;
  size?: number;
  customClasses?: string;
};

export default function ImageCard({ imgSrc, alt = '', size = 200, customClasses }: ImageCardProps) {
  return (
    <div
      className={`mx-auto h-fit w-fit overflow-hidden border shadow-2xl shadow-black/30 ${customClasses}`}
      style={{
        border: `${size < 200 ? 2 : size * 0.01}px solid white`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    >
      {imgSrc && <img src={imgSrc} alt={alt || 'image'} width={size} height={size} />}
    </div>
  );
}
