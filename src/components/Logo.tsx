import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "text-4xl" }: LogoProps) {
  return (
    <div className={`font-bold ${className}`}>
      <span className="text-[#FFE066]">LUMI</span>
      <span className="text-[#66F2F1]">VIRT</span>
    </div>
  );
}