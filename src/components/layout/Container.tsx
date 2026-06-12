import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  noPadding?: boolean;
}

const sizeMap = {
  sm: 'max-w-2xl',     // 896px
  md: 'max-w-4xl',     // 1024px
  lg: 'max-w-5xl',     // 1280px (default)
  xl: 'max-w-7xl',     // 1536px
};

export default function Container({
  children,
  className = '',
  size = 'lg',
  noPadding = false,
}: ContainerProps) {
  const paddingClass = noPadding ? '' : 'px-4 md:px-6 lg:px-8';

  return (
    <div className={`mx-auto ${sizeMap[size]} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
