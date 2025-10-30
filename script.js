// Shein Sana'a - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    console.log('Shein Sana\'a website loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        observer.observe(card);
    });

    // Add fade-in animation to steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Define animations
const style = document.createElement('style');
style.textContent = `
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
    
    .product-card {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }
    
    .step {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage = 10) {
    return (originalPrice * (100 - discountPercentage) / 100).toFixed(2);
}

// Function to format WhatsApp message
function formatWhatsAppMessage(productName, originalPrice, discountedPrice) {
    const message = `مرحبا، أرغب في طلب المنتج: ${productName}\nالسعر الأصلي: ${originalPrice} ريال\nالسعر بعد الخصم: ${discountedPrice} ريال`;
    return encodeURIComponent(message);
}

// Add product to cart (for future enhancement)
function addToCart(productName, discountedPrice) {
    console.log(`Added to cart: ${productName} - ${discountedPrice} ريال`);
    // Future implementation: store in localStorage or send to backend
}

// Log page analytics (for future enhancement)
function logPageView(pageName) {
    console.log(`Page viewed: ${pageName}`);
    // Future implementation: send analytics to server
}

// Initialize page analytics
logPageView('Shein Sana\'a - Home Page');

// Export functions for external use
window.SheinSanaa = {
    calculateDiscountedPrice,
    formatWhatsAppMessage,
    addToCart,
    logPageView
};
