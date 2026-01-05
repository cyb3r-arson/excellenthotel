document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic Year in Footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (name && phone && message) {
                // Direct Message via WhatsApp
                const phoneNumber = "254746815504"; // 0746 815 504 in international format
                const text = `Hello Excellent Guest Hotel, my name is ${name}. Phone: ${phone}. Message: ${message}`;
                const encodedText = encodeURIComponent(text);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

                // Open WhatsApp
                window.open(whatsappUrl, '_blank');

                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
