import type { ReactNode } from 'react';
import './Section.css';

type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  background?: string;
  id?: string;
};

export default function Section({ children, className = '', contentClassName='', background, id }: SectionProps) {
  const sectionClasses = `section ${className}`.trim();
  const contentClasses = `section__content ${contentClassName}`.trim();


  return (
    <section
      className={sectionClasses}
      id={id}
      style={background ? { background } : undefined}
    >
      <div className={contentClasses}>{children}</div>
    </section>
  );
}
