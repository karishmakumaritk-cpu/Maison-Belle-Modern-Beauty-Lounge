/**
 * =========================================================================
 * MAISON BELLE — MASTER INTERACTION & FUNCTIONALITY SCRIPT
 * =========================================================================
 * Vanilla JavaScript (ES6+), Dependency-Free, Accessible, Fast
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initBusinessConfig();
  initStickyHeader();
  initMobileMenu();
  initBookingModal();
  initContactForm();
  initGalleryFiltering();
  initLightbox();
  initMinDateRestrictions();
});

/**
 * 1. Synchronize UI Elements with Central Configuration
 */
function initBusinessConfig() {
  if (typeof SALON_CONFIG === 'undefined') return;

  // Replace text contents
  const textBindings = {
    '.cfg-business-name': SALON_CONFIG.businessName,
    '.cfg-subtitle': SALON_CONFIG.subtitle,
    '.cfg-tagline': SALON_CONFIG.tagline,
    '.cfg-phone': SALON_CONFIG.phone,
    '.cfg-email': SALON_CONFIG.email,
    '.cfg-address': SALON_CONFIG.address,
    '.cfg-city': SALON_CONFIG.city,
    '.cfg-hours-mon-sat': SALON_CONFIG.openingHours?.monSat,
    '.cfg-hours-sun': SALON_CONFIG.openingHours?.sunday,
    '.cfg-instagram-handle': SALON_CONFIG.social?.instagramHandle,
    '.cfg-copyright-year': new Date().getFullYear().toString(),
    '.cfg-stat-rating': SALON_CONFIG.stats?.rating,
    '.cfg-stat-appts': SALON_CONFIG.stats?.appointments,
    '.cfg-stat-exp': SALON_CONFIG.stats?.experience
  };

  Object.entries(textBindings).forEach(([selector, value]) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = value;
    });
  });

  // Construct WhatsApp URL
  const waNumber = SALON_CONFIG.whatsapp || "919999999999";
  const waMsg = encodeURIComponent(SALON_CONFIG.bookingMessage || "Hi Maison Belle, I would like to book an appointment.");
  const waUrl = `https://wa.me/${waNumber}?text=${waMsg}`;

  document.querySelectorAll('.cfg-whatsapp-link').forEach(el => {
    el.setAttribute('href', waUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Construct Phone Link
  const phoneRaw = SALON_CONFIG.phoneRaw || "919999999999";
  document.querySelectorAll('.cfg-phone-link').forEach(el => {
    el.setAttribute('href', `tel:${phoneRaw}`);
  });

  // Construct Email Link
  document.querySelectorAll('.cfg-email-link').forEach(el => {
    el.setAttribute('href', `mailto:${SALON_CONFIG.email}`);
  });

  // Social Links
  if (SALON_CONFIG.social) {
    document.querySelectorAll('.cfg-instagram-link').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.social.instagram);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('.cfg-facebook-link').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.social.facebook);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('.cfg-youtube-link').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.social.youtube);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }
}

/**
 * 2. Sticky Header with Scroll Reduction & Shadow
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Accessible Mobile Menu Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * 4. Interactive Booking Modal with Validation & Formspree Compatibility
 */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const form = document.getElementById('bookingForm');
  const serviceSelect = document.getElementById('bookService');
  const successState = modal.querySelector('.modal-success-state');
  const resetBtn = modal.querySelector('.modal-reset-btn');

  function openBookingModal(preselectedService = '') {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (form && successState) {
      form.style.display = 'block';
      successState.classList.remove('visible');
    }

    if (serviceSelect && preselectedService) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(preselectedService.toLowerCase()) ||
            serviceSelect.options[i].value.toLowerCase().includes(preselectedService.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    // Focus first input
    setTimeout(() => {
      const firstInput = modal.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 150);
  }

  function closeBookingModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Trigger buttons across page
  document.querySelectorAll('[data-open-modal="booking"], .open-booking-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openBookingModal(service);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBookingModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBookingModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeBookingModal();
    }
  });

  // Handle Form Submission with Validation
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('bookName');
      const phoneInput = document.getElementById('bookPhone');
      const dateInput = document.getElementById('bookDate');
      const timeSelect = document.getElementById('bookTime');

      // Clear previous error states
      modal.querySelectorAll('.form-error-msg').forEach(msg => msg.classList.remove('visible'));

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        isValid = false;
        showError(nameInput, 'Please enter your full name (minimum 2 characters).');
      }

      // Validate Phone (digits and plus, min 8)
      const phoneClean = phoneInput.value.replace(/[^0-9+]/g, '');
      if (!phoneClean || phoneClean.length < 8) {
        isValid = false;
        showError(phoneInput, 'Please enter a valid phone number with digits.');
      }

      // Validate Service
      if (!serviceSelect.value) {
        isValid = false;
        showError(serviceSelect, 'Please choose a beauty or hair service.');
      }

      // Validate Date
      if (!dateInput.value) {
        isValid = false;
        showError(dateInput, 'Please select your preferred date.');
      }

      // Validate Time
      if (!timeSelect.value) {
        isValid = false;
        showError(timeSelect, 'Please select a preferred appointment time.');
      }

      if (isValid) {
        // Build appointment summary
        const summaryName = modal.querySelector('.summary-name');
        const summaryService = modal.querySelector('.summary-service');
        const summaryDate = modal.querySelector('.summary-date');

        if (summaryName) summaryName.textContent = nameInput.value.trim();
        if (summaryService) summaryService.textContent = serviceSelect.options[serviceSelect.selectedIndex].text;
        if (summaryDate) summaryDate.textContent = `${dateInput.value} at ${timeSelect.value}`;

        // Create instant WhatsApp backup link
        const customWaMsg = `Hi Maison Belle, I requested a booking for ${serviceSelect.options[serviceSelect.selectedIndex].text} on ${dateInput.value} at ${timeSelect.value}. Name: ${nameInput.value.trim()}, Phone: ${phoneInput.value.trim()}.`;
        const waBtn = modal.querySelector('.modal-wa-confirm-btn');
        if (waBtn) {
          const waNum = (typeof SALON_CONFIG !== 'undefined' && SALON_CONFIG.whatsapp) || "919999999999";
          waBtn.href = `https://wa.me/${waNum}?text=${encodeURIComponent(customWaMsg)}`;
        }

        // Display Demo Submission State
        form.style.display = 'none';
        if (successState) successState.classList.add('visible');

        /**
         * NOTE FOR PRODUCTION / CRM INTEGRATION:
         * To connect to Formspree, Netlify Forms, Zapier, or a custom CRM:
         * Replace this demo block with:
         * fetch('https://formspree.io/f/YOUR_FORM_ID', {
         *   method: 'POST',
         *   body: new FormData(form),
         *   headers: { 'Accept': 'application/json' }
         * }).then(...)
         */
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (form) {
        form.reset();
        form.style.display = 'block';
      }
      if (successState) successState.classList.remove('visible');
    });
  }
}

function showError(inputEl, message) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  let errorEl = group.querySelector('.form-error-msg');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('visible');
  }
}

/**
 * 5. Contact Form on Contact Page
 */
function initContactForm() {
  const contactForm = document.getElementById('contactPageForm');
  if (!contactForm) return;

  const successBox = document.getElementById('contactSuccessMsg');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const phone = document.getElementById('contactPhone');
    const message = document.getElementById('contactMessage');

    contactForm.querySelectorAll('.form-error-msg').forEach(msg => msg.classList.remove('visible'));

    if (!name.value.trim() || name.value.trim().length < 2) {
      isValid = false;
      showError(name, 'Please enter your name.');
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      isValid = false;
      showError(email, 'Please enter a valid email address.');
    }

    if (!phone.value.trim() || phone.value.replace(/[^0-9+]/g, '').length < 8) {
      isValid = false;
      showError(phone, 'Please enter a valid phone number.');
    }

    if (isValid) {
      contactForm.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

/**
 * 6. Gallery Filtering (Vanilla JS)
 */
function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter') || 'all';

      galleryItems.forEach(item => {
        const itemCategory = (item.getAttribute('data-category') || '').toLowerCase();
        if (filter === 'all' || itemCategory.includes(filter.toLowerCase())) {
          item.classList.remove('hidden-item');
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.classList.add('hidden-item');
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}

/**
 * 7. Modern Vanilla Lightbox (Keyboard Accessible, Touch Ready, No External Library)
 */
function initLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image-wrap img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let activeIndex = 0;
  let visibleItems = [];

  function updateVisibleItems() {
    visibleItems = Array.from(document.querySelectorAll('.gallery-grid .gallery-item:not(.hidden-item)'));
  }

  function showImage(index) {
    updateVisibleItems();
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    activeIndex = index;
    const currentItem = visibleItems[activeIndex];
    const img = currentItem.querySelector('img');
    const title = currentItem.querySelector('.gallery-item-title')?.textContent || 'Maison Belle Salon';
    const tag = currentItem.querySelector('.gallery-item-tag')?.textContent || '';

    if (img && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || title;
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = tag ? `${title} — ${tag}` : title;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${activeIndex + 1} of ${visibleItems.length}`;
    }
  }

  function openLightbox(item) {
    updateVisibleItems();
    const index = visibleItems.indexOf(item);
    if (index !== -1) {
      showImage(index);
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach click to gallery items
  document.querySelectorAll('.gallery-grid .gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View photo in lightbox');
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(activeIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-container')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (e.key === 'ArrowRight') showImage(activeIndex + 1);
  });
}

/**
 * 8. Set Dynamic Minimum Date on Booking Pickers
 */
function initMinDateRestrictions() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute('min', today);
  });
}
