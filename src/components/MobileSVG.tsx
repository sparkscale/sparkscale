'use client';

import React, { useEffect, useState } from 'react';

type MobileSVGProps = {
  src: string;
  className?: string;
};

export default function MobileSVG({ src, className }: MobileSVGProps) {
  const [svgMarkup, setSvgMarkup] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    fetch(src, { cache: 'no-store' })
      .then(async (res) => {
        const text = await res.text();
        if (isMounted) setSvgMarkup(text);
      })
      .catch(() => {
        if (isMounted) setSvgMarkup('');
      });
    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      aria-hidden={false}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}