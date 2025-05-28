import React, { useRef, useEffect, useState } from 'react';
import Quote from './quote';

export default function FooterScroll() {
  const stickyContainer = useRef(null);
  const stickyMask = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    const animate = () => {
      if (!stickyMask.current) return;

      const progress = getScrollProgress();
      const maskSize = (initialMaskSize + targetMaskSize * progress) * 135;
stickyMask.current.style.setProperty("--mask-size", `${maskSize}%`);
      stickyMask.current.style.webkitMaskSize = `${maskSize}%`;
      stickyMask.current.style.maskSize = `${maskSize}%`;

      setScrollProgress(progress); // <-- Update state to trigger re-render

      requestAnimationFrame(animate);
    };

   const getScrollProgress = () => {
  if (!stickyContainer.current) return easedScrollProgress;

  const rect = stickyContainer.current.getBoundingClientRect();
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const rawProgress = Math.min(Math.max(-rect.top / viewportHeight, 0), 1);
  const delta = rawProgress - easedScrollProgress;
  easedScrollProgress += delta * easing;
  return easedScrollProgress;
};

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <div className="text-animation-container">
        <div className="text-animation-border-top"></div>
      </div>

      <main className="sticky-main" style={{ height: '100vh' }}>
        <div ref={stickyContainer} className="stickyContainer">
          <div ref={stickyMask} className="stickyMask">
            <div
  className={`quote-overlay ${scrollProgress >= 0.80 ? "visible" : "hidden"}`}
>
  <p className="emoji has-text-centered">✨</p>
  <Quote shouldAnimate={scrollProgress >= 0.80} />
</div>

            <video autoPlay muted loop playsInline>
              <source src="/nature.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </main>
    </>
  );
}
