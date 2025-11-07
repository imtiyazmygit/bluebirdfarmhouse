// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Gallery lightbox functionality
function initGalleryLightbox() {
  const galleryImages = document.querySelectorAll('.gallery-grid img, .image-gallery img');
  
  if (galleryImages.length === 0) return;

  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <span class="lightbox-prev">&#10094;</span>
    <span class="lightbox-next">&#10095;</span>
    <img src="" alt="" class="lightbox-image">
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lightbox);

  let currentImageIndex = 0;
  const imagesArray = Array.from(galleryImages);

  // Add click event to all gallery images
  galleryImages.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      currentImageIndex = index;
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, alt) {
    lightbox.classList.add('active');
    lightbox.querySelector('.lightbox-image').src = src;
    lightbox.querySelector('.lightbox-caption').textContent = alt;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
    const nextImg = imagesArray[currentImageIndex];
    lightbox.querySelector('.lightbox-image').src = nextImg.src;
    lightbox.querySelector('.lightbox-caption').textContent = nextImg.alt;
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    const prevImg = imagesArray[currentImageIndex];
    lightbox.querySelector('.lightbox-image').src = prevImg.src;
    lightbox.querySelector('.lightbox-caption').textContent = prevImg.alt;
  }

  // Event listeners for lightbox controls
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-next').addEventListener('click', showNextImage);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrevImage);
  
  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });
}

// Form validation and enhancement
function enhanceContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Optionally submit the form (if using formspree or similar)
    // form.submit();
    
    // Reset form
    form.reset();
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add fade-in animation to sections
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// Mobile menu toggle (if needed for future enhancement)
function initMobileMenu() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Add mobile menu button if screen is small
  if (window.innerWidth <= 768) {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-label', 'Toggle menu');
    
    const header = document.querySelector('header');
    header.insertBefore(menuButton, nav);

    menuButton.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initGalleryLightbox();
  enhanceContactForm();
  initScrollAnimations();
  initMobileMenu();
  initVideoFeatures();
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Video enhancement features
function initVideoFeatures() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    // Add loading indicator
    video.addEventListener('loadstart', function() {
      console.log('Video loading...');
    });
    
    // Log when video is ready
    video.addEventListener('loadeddata', function() {
      console.log('Video ready to play');
    });
    
    // Track video play
    video.addEventListener('play', function() {
      console.log('Video started playing');
      // Pause other videos if multiple are playing
      videos.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
    
    // Add click to play/pause functionality
    video.addEventListener('click', function(e) {
      // Only toggle if clicking on video, not controls
      if (e.target === video) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
    
    // Optimize video loading
    video.setAttribute('preload', 'metadata');
    
    // Add picture-in-picture support
    if (document.pictureInPictureEnabled) {
      video.addEventListener('dblclick', async function() {
        try {
          if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
          } else {
            await video.requestPictureInPicture();
          }
        } catch (error) {
          console.log('Picture-in-Picture not available');
        }
      });
    }
    
    // Add keyboard controls
    video.addEventListener('keydown', function(e) {
      switch(e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          video.paused ? video.play() : video.pause();
          break;
        case 'ArrowLeft':
          video.currentTime = Math.max(0, video.currentTime - 5);
          break;
        case 'ArrowRight':
          video.currentTime = Math.min(video.duration, video.currentTime + 5);
          break;
        case 'f':
          if (video.requestFullscreen) {
            video.requestFullscreen();
          }
          break;
        case 'm':
          video.muted = !video.muted;
          break;
      }
    });
  });
  
  // Create floating video player button on homepage
  const farmhouseVideo = document.getElementById('farmhouseVideo');
  if (farmhouseVideo && window.location.pathname.includes('index')) {
    createFloatingVideoButton();
  }
}

// Create a floating "Watch Video" button
function createFloatingVideoButton() {
  const video = document.getElementById('farmhouseVideo');
  if (!video) return;
  
  const floatingBtn = document.createElement('div');
  floatingBtn.className = 'floating-video-btn';
  floatingBtn.innerHTML = '🎥 Watch Tour';
  floatingBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #2a7f62, #1b503a);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(42, 127, 98, 0.4);
    font-weight: 600;
    z-index: 1000;
    transition: all 0.3s ease;
    display: none;
  `;
  
  document.body.appendChild(floatingBtn);
  
  // Show button when scrolled past video
  window.addEventListener('scroll', () => {
    const videoSection = document.querySelector('.video-section');
    if (videoSection) {
      const rect = videoSection.getBoundingClientRect();
      if (rect.bottom < 0) {
        floatingBtn.style.display = 'block';
      } else {
        floatingBtn.style.display = 'none';
      }
    }
  });
  
  // Scroll to video on click
  floatingBtn.addEventListener('click', () => {
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      if (video.paused) {
        video.play();
      }
    }, 500);
  });
  
  // Hover effect
  floatingBtn.addEventListener('mouseenter', () => {
    floatingBtn.style.transform = 'scale(1.1) translateY(-3px)';
    floatingBtn.style.boxShadow = '0 6px 30px rgba(42, 127, 98, 0.6)';
  });
  
  floatingBtn.addEventListener('mouseleave', () => {
    floatingBtn.style.transform = 'scale(1) translateY(0)';
    floatingBtn.style.boxShadow = '0 4px 20px rgba(42, 127, 98, 0.4)';
  });
}

