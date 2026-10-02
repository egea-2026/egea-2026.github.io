// A tile is a view into the original image. SVG's uniform scaling crops the
// tile to fit its container without stretching it or revealing adjacent tiles.
export default function AtlasImage({ atlas, index, alt, className }) {
  const tileWidth = atlas.width / atlas.columns;
  const tileHeight = atlas.height / atlas.rows;
  const x = (index % atlas.columns) * tileWidth;
  const y = Math.floor(index / atlas.columns) * tileHeight;

  return (
    <svg
      className={className}
      viewBox={`${x} ${y} ${tileWidth} ${tileHeight}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
    >
      <image href={atlas.src} width={atlas.width} height={atlas.height} />
    </svg>
  );
}
