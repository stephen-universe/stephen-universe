import React, { useRef, useEffect } from 'react';

export default function FooterScroll() {
  const stickyContainer = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    const animate = () => {
      if (!stickyMask.current) return;

      const progress = getScrollProgress();
      const maskSize = (initialMaskSize + targetMaskSize * progress) * 135;
      stickyMask.current.style.webkitMaskSize = `${maskSize}%`;
      stickyMask.current.style.maskSize = `${maskSize}%`;

      requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
      if (!stickyContainer.current) return easedScrollProgress;

      const rect = stickyContainer.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
    <div className='text-animation-container'>
    <div className="text-animation-border-top"></div>
    <main className="sticky-main">
      <div ref={stickyContainer} className="stickyContainer">
        <div ref={stickyMask} className="stickyMask">
          <video autoPlay muted loop playsInline>
            <source src="/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
    </div>
    </>
  );
}
