'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './loader';

const PageTransitionLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={
          loading
            ? 'bg-[#f5f5f4cc]/80 backdrop-blur-sm'
            : 'opacity-100 transition-opacity duration-300'
        }
      >
        {children}
      </div>
    </>
  );
};

export default PageTransitionLoader;
