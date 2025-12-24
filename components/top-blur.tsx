'use client';

type TopBlurProps = {
  height?: number;
  maxBlur?: number; // px
  zIndex?: number;
};

export default function TopBlur({
  height = 160,
  maxBlur = 50,
  zIndex = 50,
}: TopBlurProps) {
  const layers = 20;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full"
      style={{ height, zIndex, transform: 'scaleY(-1)', }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const progress = i / (layers - 1); // 0 → 1
        const blur = progress * maxBlur;
        const opacity = 0.01 + progress * 0.18;

        return (
          <div
            key={i}
            style={{
              height: `${100 / layers}%`,
              backdropFilter: `blur(${blur}px)`,
              background: `rgba(255,255,255,${opacity})`,
            }}
          />
        );
      })}
    </div>
  );
}
