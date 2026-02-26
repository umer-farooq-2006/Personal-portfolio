/* ==========================================================================
   Main JavaScript - Personal Portfolio Website
   ========================================================================== */

'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded successfully!');
  
  // Initialize all components
  initNavigation();
  initSmoothScroll();
  initActiveSection();
});

/* ==========================================================================
   Navigation
   ========================================================================== */

/**
 * Initialize navigation functionality
 */
function initNavigation() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('nav__list--open');
      
      // Update toggle aria-expanded
      const isExpanded = navList.classList.contains('nav__list--open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = navList.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('nav__list--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   Smooth Scrolling
   ========================================================================== */

/**
 * Initialize smooth scrolling with fallback for older browsers
 */
function initSmoothScroll() {
  // Check if browser supports smooth scroll behavior
  const supportsSmoothScroll = getComputedStyle(document.documentElement)
    .scrollBehavior === 'smooth';
  
  if (!supportsSmoothScroll) {
    // Fallback for browsers that don't support CSS smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Calculate scroll position with offset for fixed header
          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      });
    });
  }
}

/* ==========================================================================
   Active Section Highlighting
   ========================================================================== */

/**
 * Initialize active section highlighting using Intersection Observer
 */
function initActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[data-section]');
  
  if (sections.length === 0 || navLinks.length === 0) {
    return;
  }
  
  // Options for the observer
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px', // Trigger when section is in top 20-80% of viewport
    threshold: 0
  };
  
  /**
   * Observer callback - updates active navigation link
   */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeSectionId = entry.target.id;
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          link.removeAttribute('aria-current');
        });
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(
          `.nav__link[data-section="${activeSectionId}"]`
        );
        
        if (activeLink) {
          activeLink.classList.add('nav__link--active');
          activeLink.setAttribute('aria-current', 'page');
        }
      }
    });
  }, observerOptions);
  
  // Observe all sections
  sections.forEach(section => sectionObserver.observe(section));
}

/* ==========================================================================
   Utility Functions
   ========================================================================== */

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
