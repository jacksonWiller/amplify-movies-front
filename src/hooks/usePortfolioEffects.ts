import { useEffect } from 'react';

export const usePortfolioEffects = () => {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const anchor = e.target as HTMLAnchorElement;
      if (anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
      });
    }, observerOptions);

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    // Add click listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card, .about-content').forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      observer.disconnect();
    };
  }, []);
};
