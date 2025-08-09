interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }: ShinyTextProps) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        background: disabled 
          ? 'transparent'
          : `linear-gradient(110deg, #000 45%, #fff 55%, #000 65%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: disabled ? 'none' : `shine ${speed}s infinite linear`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText; 