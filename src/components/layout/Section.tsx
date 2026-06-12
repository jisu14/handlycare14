import { ReactNode, forwardRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  dark?: boolean;
  noPadding?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  dark = false,
  noPadding = false,
  style,
  id,
  ...rest
}, ref) => {
  const bgClass = dark ? 'bg-[#080C0C]' : 'bg-white';
  const paddingClass = noPadding ? '' : 'py-28 md:py-32 lg:py-36';

  return (
    <section
      ref={ref}
      id={id}
      className={`w-full ${bgClass} ${paddingClass} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
