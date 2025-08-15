document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const firstName = formData.get('firstName') || contactForm.querySelector('input[placeholder="First Name"]').value;
        const lastName = formData.get('lastName') || contactForm.querySelector('input[placeholder="Last Name"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[placeholder="Email Address"]').value;
        const brandName = formData.get('brandName') || contactForm.querySelector('input[placeholder="Channel/Brand Name"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!firstName || !lastName || !email || !brandName || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Portfolio item interactions
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const viewButton = item.querySelector('.portfolio-overlay .btn');
        
        if (viewButton) {
            viewButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const itemTitle = item.querySelector('h3').textContent;
                alert(`Viewing details for: ${itemTitle}`);
            });
        }
    });
    
    // Header background opacity on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.01;
        
        if (scrolled > 100) {
            header.style.backgroundColor = `rgba(18, 18, 18, ${Math.min(0.95, 0.8 + rate)})`;
        } else {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
        }
    });
    
    // Button click handlers for CTAs
    const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Get Started') || button.textContent.includes('View My Work')) {
            button.addEventListener('click', function(e) {
                if (!this.getAttribute('href') && this.type !== 'submit') {
                    e.preventDefault();
                    const portfolioSection = document.querySelector('#portfolio');
                    if (portfolioSection) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = portfolioSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
        
        if (button.textContent.includes('Contact Me')) {
            button.addEventListener('click', function(e) {
                if (!this.getAttribute('href') && this.type !== 'submit') {
                    e.preventDefault();
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = contactSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
        
        if (button.textContent.includes('Book a Call') || button.textContent.includes('View All Work')) {
            button.addEventListener('click', function(e) {
                if (!this.getAttribute('href') && this.type !== 'submit') {
                    e.preventDefault();
                    alert('This feature will be available soon!');
                }
            });
        }
    });
    
    // Add form field names for better form handling
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach((input, index) => {
        const placeholder = input.placeholder.toLowerCase().replace(/\s+/g, '');
        if (placeholder.includes('first')) input.name = 'firstName';
        else if (placeholder.includes('last')) input.name = 'lastName';
        else if (placeholder.includes('email')) input.name = 'email';
        else if (placeholder.includes('channel') || placeholder.includes('brand')) input.name = 'brandName';
        else if (input.tagName === 'TEXTAREA') input.name = 'message';
    });
});