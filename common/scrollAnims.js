export const scrollAnimation = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  let new_scroll_position = 0;
  let last_scroll_position;

  // Wrap DOM logic in a requestAnimationFrame to ensure it's executed after DOM is ready
  requestAnimationFrame(() => {
    const header = document.getElementById("stickyHeader");
    const scrollTopButton = document.getElementById('scrollTop');
    const timeline = document.querySelector(".timeline .fill");

    if (!header || !scrollTopButton) return;

    const handleScroll = function () {
      last_scroll_position = window.scrollY;

      if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {
        header.classList.remove("slideDown");
        header.classList.add("slideUp");
      } else if (last_scroll_position < 100) {
        header.classList.remove("slideDown");
      } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
      }

      new_scroll_position = last_scroll_position;

      if (last_scroll_position >= 160) {
        scrollTopButton.classList.add('active');
      } else {
        scrollTopButton.classList.remove('active');
      }

      if (timeline) {
        const timelineTop = timeline.offsetTop;
        timeline.style.height = `${last_scroll_position - timelineTop - 200}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    // Cleanup (return a function that removes the listeners)
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollTopButton.removeEventListener('click');
    };
  });
};
