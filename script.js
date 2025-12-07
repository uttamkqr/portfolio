// Navigation Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add active class style
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--text-primary);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    
    // Create a success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    successMessage.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
            <div>
                <strong>Message Sent!</strong>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">I'll get back to you soon.</p>
            </div>
        </div>
    `;
    
    // Add animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(successMessage);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 4000);
    
    // Reset form
    contactForm.reset();
    
    // Log form data (in production, send to server)
    console.log('Form submitted:', { name, email, subject, message });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-card,
    .project-card,
    .contact-item {
        opacity: 0;
    }
`;
document.head.appendChild(fadeInStyle);

// Observe elements
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Profile Image Handler
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        // You can replace this URL with your actual image URL
        // Option 1: Use a local image (place image in same folder)
        // profileImg.src = 'profile.jpg';
        
        // Option 2: Use image hosting service like Imgur, Cloudinary etc
        // profileImg.src = 'YOUR_IMAGE_URL_HERE';
        
        // For now, it will show the default icon if no image is found
    }
});

// Simple fade-in animation for hero title (no typing effect to avoid HTML tag display issues)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-in';
        heroTitle.style.opacity = '1';
    }, 200);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// Project card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Scroll Progress Bar
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Cursor Trail Effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 600);
});

// Add cursor trail styles
const cursorTrailStyle = document.createElement('style');
cursorTrailStyle.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 0.6s ease-out forwards;
    }
    
    @keyframes trailFade {
        to {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cursorTrailStyle);

// Enhanced scroll animations with stagger effect
const animateOnScroll = document.querySelectorAll('.skill-card, .project-card');
animateOnScroll.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Typing effect for stats
const statNumbers = document.querySelectorAll('.stat h4');
const animateStats = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const number = parseInt(text);
            
            if (!isNaN(number)) {
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = text;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + (text.includes('+') ? '+' : text.includes('%') ? '%' : '');
                    }
                }, 30);
            }
            observer.unobserve(target);
        }
    });
};

const statsObserver = new IntersectionObserver(animateStats, { threshold: 0.5 });
statNumbers.forEach(stat => statsObserver.observe(stat));

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Phone number click to copy
const phoneElements = document.querySelectorAll('.contact-item p');
phoneElements.forEach(el => {
    if (el.textContent.includes('+91')) {
        el.style.cursor = 'pointer';
        el.title = 'Click to copy';
        el.addEventListener('click', () => {
            navigator.clipboard.writeText(el.textContent.trim());
            
            // Show toast message
            const toast = document.createElement('div');
            toast.className = 'toast-message';
            toast.textContent = '📋 Phone number copied!';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        });
    }
});

// Add toast message styles
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast-message {
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: var(--gradient-1);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.4);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    }
    
    .toast-message.show {
        transform: translateX(0);
    }
`;
document.head.appendChild(toastStyle);

// Smooth reveal for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Resume Download Handler
const downloadResumeBtn = document.getElementById('downloadResume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show custom modal
        const modal = document.createElement('div');
        modal.className = 'resume-modal';
        modal.innerHTML = `
            <div class="resume-modal-content">
                <button class="modal-close">&times;</button>
                <h2>📄 Download Resume</h2>
                <p>Choose your preferred format:</p>
                <div class="resume-options">
                    <a href="#" class="resume-option" data-format="pdf">
                        <i class="fas fa-file-pdf"></i>
                        <span>PDF Format</span>
                        <small>Recommended</small>
                    </a>
                    <a href="#" class="resume-option" data-format="doc">
                        <i class="fas fa-file-word"></i>
                        <span>Word Format</span>
                        <small>Editable</small>
                    </a>
                </div>
                <p class="resume-note">💡 <strong>Note:</strong> Please add your resume file (resume.pdf) to the portfolio folder first!</p>
                <div class="resume-instructions">
                    <h4>Quick Setup:</h4>
                    <ol>
                        <li>Save your resume as <code>resume.pdf</code></li>
                        <li>Place it in the portfolio folder</li>
                        <li>Click PDF Format above to download</li>
                    </ol>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        setTimeout(() => modal.classList.add('show'), 10);
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            }
        });
        
        // Resume download handlers
        const pdfOption = modal.querySelector('[data-format="pdf"]');
        const docOption = modal.querySelector('[data-format="doc"]');
        
        pdfOption.addEventListener('click', (e) => {
            e.preventDefault();
            // Open resume in new tab for printing
            window.open('resume.html', '_blank');
            
            // Show instructions
            showToast('✅ Resume opened! Press Ctrl+P to save as PDF', 'success');
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
            
            // Show detailed instructions after a delay
            setTimeout(() => {
                alert('📄 SAVE AS PDF:\n\n1. Press Ctrl+P (or Cmd+P on Mac)\n2. Select "Save as PDF"\n3. Enable "Background graphics"\n4. Click Save\n\nYour professional resume will be saved!');
            }, 1000);
        });
        
        docOption.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to helper page
            window.open('generate_resume_pdf.html', '_blank');
            
            showToast('📘 Opening Word conversion guide...', 'info');
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
    });
}

// Toast notification helper
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add modal styles
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .resume-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    }
    
    .resume-modal.show {
        opacity: 1;
    }
    
    .resume-modal-content {
        background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
        border: 2px solid rgba(0, 212, 255, 0.3);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
    }
    
    .resume-modal.show .resume-modal-content {
        transform: scale(1);
    }
    
    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    
    .modal-close:hover {
        background: rgba(0, 212, 255, 0.2);
        transform: rotate(90deg);
    }
    
    .resume-modal-content h2 {
        color: white;
        margin-bottom: 1rem;
        text-align: center;
    }
    
    .resume-modal-content > p {
        color: #94a3b8;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    
    .resume-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .resume-option {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1.5rem;
        background: rgba(0, 212, 255, 0.1);
        border: 2px solid rgba(0, 212, 255, 0.3);
        border-radius: 15px;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .resume-option:hover {
        background: rgba(0, 212, 255, 0.2);
        border-color: var(--primary-color);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
    }
    
    .resume-option i {
        font-size: 2.5rem;
        color: var(--primary-color);
    }
    
    .resume-option span {
        font-weight: 600;
        font-size: 1rem;
    }
    
    .resume-option small {
        color: #94a3b8;
        font-size: 0.8rem;
    }
    
    .resume-note {
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.3);
        border-radius: 10px;
        padding: 1rem;
        font-size: 0.9rem;
        color: #f59e0b;
        margin-bottom: 1rem;
    }
    
    .resume-instructions {
        background: rgba(26, 31, 58, 0.6);
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    .resume-instructions h4 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .resume-instructions ol {
        margin-left: 1.5rem;
        color: #94a3b8;
        font-size: 0.9rem;
        line-height: 1.8;
    }
    
    .resume-instructions code {
        background: rgba(0, 212, 255, 0.2);
        padding: 2px 6px;
        border-radius: 4px;
        color: var(--primary-color);
        font-family: 'Courier New', monospace;
    }
    
    @media (max-width: 640px) {
        .resume-options {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(modalStyles);

console.log('🚀 Enhanced Portfolio Loaded Successfully! ✨');
console.log('💡 Tip: Click on phone number to copy!');
console.log('📄 Note: Add resume.pdf file for download feature!');
