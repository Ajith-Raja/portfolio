// ==========================================
// Scroll Animation Implementation
// ==========================================

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    triggerVisibleAnimations();
});

// Initialize Intersection Observer for scroll animations
function initializeScrollAnimations() {
    // Create observer for service cards, testimonials, and sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        observer.observe(card);
    });

    // Observe accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
        observer.observe(item);
    });

    // Observe section headings
    document.querySelectorAll('section h2').forEach(heading => {
        observer.observe(heading);
    });

    // Observe section paragraphs
    document.querySelectorAll('section > p').forEach(paragraph => {
        observer.observe(paragraph);
    });
}

// Trigger animations for elements already in view on page load
function triggerVisibleAnimations() {
    const elements = document.querySelectorAll(
        '.service-card, .testimonial-card, .accordion-item, section h2, section > p'
    );

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('scroll-visible');
        }
    });
}

// Handle scroll events for additional animations
window.addEventListener('scroll', function() {
    // Add more sophisticated scroll animations here if needed
    // Currently handled by IntersectionObserver which is more performant
}, { passive: true });

// ==========================================
// Mobile Menu Toggle
// ==========================================

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Accordion Functionality
document.querySelectorAll('.accordion-item h3').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(acc => {
            if (acc !== content) {
                acc.classList.remove('active');
            }
        });

        document.querySelectorAll('.accordion-item i').forEach(ic => {
            if (ic !== icon) {
                ic.style.transform = 'rotate(0deg)';
            }
        });

        // Toggle current accordion
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
});


// Smooth scroll behavior fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('text-orange-600');
        const href = link.getAttribute('href');
        if (href === '#' + current) {
            link.classList.add('text-orange-600');
        }
    });
});

// Form submission handler (if you add a contact form later)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message. We will contact you soon!');
        this.reset();
    });
}

// Add ripple effect to buttons
document.querySelectorAll('button, a[class*="btn"]').forEach(button => {
    button.addEventListener('click', function(event) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        if (!this.style.position || this.style.position === 'static') {
            this.style.position = 'relative';
        }
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Print current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerYears = document.querySelectorAll('footer');
    footerYears.forEach(footer => {
        const text = footer.innerHTML;
        footer.innerHTML = text.replace('2024', currentYear);
    });
});

console.log('ServicePoint Website Loaded Successfully!');