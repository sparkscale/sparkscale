'use client';

import { useEffect, useState } from 'react';
import Magnet from '@/components/Magnet';

interface ConditionalMagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  innerClassName?: string;
}

export default function ConditionalMagnet({ 
  children, 
  padding = 20, 
  disabled = false, 
  magnetStrength = 4, 
  innerClassName = '' 
}: ConditionalMagnetProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <Magnet
      padding={padding}
      disabled={disabled}
      magnetStrength={magnetStrength}
      innerClassName={innerClassName}
    >
      {children}
    </Magnet>
  );
}