import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ButtonLink({ children, to, href, variant = 'primary', icon = true, ...props }) {
  const className = `button button-${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /> : null}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer noopener" {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={to} {...props}>
      {content}
    </Link>
  );
}
