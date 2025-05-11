  let ticking = false;
    window.addEventListener('wheel', function(e) {
      if (!ticking) {
        ticking = true;
        const direction = e.deltaY > 0 ? 'down' : 'up';
        const sections = document.querySelectorAll('.container');
        const current = Array.from(sections).findIndex(s => {
          return Math.round(s.getBoundingClientRect().top) === 0;
        });
        const next = direction === 'down' 
          ? Math.min(current + 1, sections.length - 1)
          : Math.max(current - 1, 0);
        sections[next].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => ticking = false, 1600);
      }
    });