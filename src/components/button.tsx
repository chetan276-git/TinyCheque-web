import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: ReactNode;
  target?: string;
};

const styles = {
  primary:
    'w-full sm:w-1/2 border border-[#2F4085] bg-[#2F4085] hover:bg-[#1e2f6b] rounded-md px-2 py-3 md:py-2 text-md md:text-lg text-white font-semibold text-center flex items-center justify-center transition-colors duration-200',
  secondary:
    'w-full sm:w-1/2 border border-[#E5E7EB] bg-white hover:border-[#2F4085] hover:text-[#2F4085] rounded-md px-4 py-3 md:py-4 text-md md:text-lg text-[#2F4085] font-semibold text-center flex items-center justify-center transition-colors duration-200',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  target,
}: ButtonProps) {
  const className = styles[variant];

  if (href) {
    const isExternal = href.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={className}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link href={href} legacyBehavior>
          <a target={target} className={className}>
            {children}
          </a>
        </Link>
      );
    }
  }

  return (
    <button className={className} type='button'>
      {children}
    </button>
  );
}
