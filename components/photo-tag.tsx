'use client';

import Image from 'next/image';
import { useState } from 'react';

type TagPosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

type PhotoTagProps = {
  photoSrc: string;
  photoWidth: number;
  photoHeight: number;
  className: string;
  tagSrc: string;
  tagPosition: TagPosition;
  alt?: string;
};

export default function PhotoTag({
  photoSrc,
  photoWidth,
  photoHeight,
  className,
  tagSrc,
  tagPosition,
  alt = 'Photo with tag',
}: PhotoTagProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main photo */}
      <Image
        src={photoSrc}
        alt={alt}
        width={photoWidth}
        height={photoHeight}
        className={className}
        style={{ filter: 'contrast(90%)' }}
      />

      {/* Tag image */}
      <div
        className={`
          absolute
          transition-all
          duration-200
          ease-out
          origin-bottom
          pointer-events-none
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        style={tagPosition}
      >
        <Image
          src={tagSrc}
          alt="Tag"
          width={41}
          height={32}
        />
      </div>
    </div>
  );
}
