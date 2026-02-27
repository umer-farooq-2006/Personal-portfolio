/* ==========================================================================
   Navigation Module - Personal Portfolio Website (Enhanced)
   ========================================================================== */

'use strict';

/**
 * Navigation Controller
 * Handles mobile menu toggle, active state management, and keyboard navigation
 */

/* ==========================================================================
   Initialization
   ========================================================================== */

/**
 * Initialize all navigation components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActivePageIndicator();
  initKeyboardNavigation();
  initNavScrollEffect();
});

/* ==========================================================================
   Mobile Menu
   ========================================================================== */

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const header = document.querySelector('.header');

  if (!navToggle || !navList) {
    console.warn('Navigation elements not found');
    return;
  }

  // Toggle menu on button click
  navToggle.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking on a nav link
  const navLinks = navList.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navToggle.contains(event.target) && !navList.contains(event.target)) {
      closeMobileMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.focus();
      closeMobileMenu();
    }
  });

  // Prevent body scroll when menu is open
  const observer = new MutationObserver(() => {
    const isMenuOpen = navList.classList.contains('nav__list--open');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  });

  observer.observe(navList, {
    attributes: true,
    attributeFilter: ['class']
  });
}

/**
 * Toggle mobile menu open/closed
 */
function toggleMobileMenu() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (!navToggle || !navList) return;

  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

/**
 * Open mobile menu with animation
 */
function openMobileMenu() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (!navToggle || !navList) return;

  navToggle.setAttribute('aria-expanded', 'true');
  navList.classList.add('nav__list--open');
  document.body.style.overflow = 'hidden';
  
  // Animate nav items
  const navLinks = navList.querySelectorAll('.nav__link');
  navLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateX(-10px)';
    link.style.transition = 'all 0.3s ease';
    link.style.transitionDelay = `${index * 50}ms`;
    
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateX(0)';
    }, 100 + (index * 50));
  });
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (!navToggle || !navList) return;

  navToggle.setAttribute('aria-expanded', 'false');
  navList.classList.remove('nav__list--open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Active Page Indicator
   ========================================================================== */

/**
 * Initialize active page indicator in navigation
 * Highlights the current page in the navigation menu
 */
function initActivePageIndicator() {
  const navLinks = document.querySelectorAll('.nav__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Remove any existing active state
    link.classList.remove('nav__link--active');
    link.removeAttribute('aria-current');

    // Check if this link points to the current page
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ==========================================================================
   Keyboard Navigation
   ========================================================================== */

/**
 * Initialize keyboard navigation enhancements
 */
function initKeyboardNavigation() {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');
  const navToggle = document.querySelector('.nav__toggle');

  if (!nav || navLinks.length === 0) return;

  // Arrow key navigation within nav menu
  nav.addEventListener('keydown', (event) => {
    const focusableElements = Array.from(navLinks);
    const currentIndex = focusableElements.indexOf(document.activeElement);

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        focusableElements[prevIndex].focus();
        break;

      case 'Home':
        event.preventDefault();
        focusableElements[0].focus();
        break;

      case 'End':
        event.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
        break;
    }
  });

  // Ensure toggle button is keyboard accessible
  if (navToggle) {
    navToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMobileMenu();
      }
    });
  }
}

/* ==========================================================================
   Header Scroll Effect
   ========================================================================== */

/**
 * Add subtle background change to header on scroll
 */
function initNavScrollEffect() {
  const header = document.querySelector('.header');
  
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
        
        lastScroll = currentScroll;
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

/* ==========================================================================
   Utility Functions (exported for use in main.js)
   ========================================================================== */

/**
 * Get current page path
 * @returns {string} Current page filename
 */
function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

/**
 * Check if menu is currently open
 * @returns {boolean} True if mobile menu is open
 */
function isMenuOpen() {
  const navList = document.querySelector('.nav__list');
  return navList ? navList.classList.contains('nav__list--open') : false;
}

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector of element to scroll to
 * @param {number} offset - Offset from top of viewport
 */
function scrollToElement(selector, offset = 0) {
  const element = document.querySelector(selector);
  
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}
