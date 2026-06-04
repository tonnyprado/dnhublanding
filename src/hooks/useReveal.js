import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    // Standard reveal - fades in when entering viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          } else {
            // Remove 'in' class when leaving viewport for re-animation
            entry.target.classList.remove('in');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Staggered children animation
    const staggerIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          } else {
            entry.target.classList.remove('in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.reveal-stagger').forEach((el) => staggerIo.observe(el));

    return () => {
      io.disconnect();
      staggerIo.disconnect();
    };
  }, []);
}
