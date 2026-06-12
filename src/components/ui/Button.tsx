'use client';

import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-dark' | 'text';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  ariaBusy?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: `
    bg-white text-black
    hover:bg-gray-100 active:opacity-90
    disabled:bg-surface-300 disabled:text-text-tertiary disabled:cursor-not-allowed
    transition-all duration-150 ease-out
    shadow-lg hover:shadow-glow
    active:shadow-none active:translate-y-0
    hover:translate-y-[-2px]
  `,
  secondary: `
    bg-surface-200 text-ink
    hover:bg-surface-300
    active:bg-surface-300
    transition-colors duration-150
    disabled:bg-surface-100 disabled:text-muted disabled:cursor-not-allowed
  `,
  outline: `
    border border-hairline text-ink
    hover:border-primary hover:bg-primary-light
    active:border-primary-dark active:bg-primary-light/50
    transition-colors duration-150
    disabled:border-hairline disabled:text-muted disabled:cursor-not-allowed
  `,
  'outline-dark': `
    border-2 border-white/40 text-white
    hover:border-white/60 hover:bg-white/5
    active:bg-white/10
    transition-colors duration-150
    disabled:border-white/10 disabled:text-white/50 disabled:cursor-not-allowed
  `,
  text: `
    text-primary
    hover:text-primary-dark
    active:opacity-80
    transition-colors duration-150
    underline-offset-4 hover:underline
    disabled:text-muted disabled:cursor-not-allowed
  `,
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-[13px] leading-tight rounded-full h-8',
  md: 'px-5 py-2.5 text-[15px] leading-snug rounded-full h-11',
  lg: 'px-8 py-3.5 text-[15px] leading-snug rounded-full h-[52px] font-semibold',
  xl: 'px-10 py-4 text-base leading-snug rounded-full h-14 font-semibold',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  ariaLabel,
  ariaBusy,
}: ButtonProps) {
  const baseClasses = `
    font-body font-medium
    cursor-pointer
    inline-flex items-center justify-center gap-2
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E6B6E]
    disabled:pointer-events-none
  `;

  const combinedClass = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClass} type={type} aria-label={ariaLabel} aria-busy={ariaBusy}>
      {content}
    </button>
  );
}
