// ================================================================
// EXPERIMENTAL PORTFOLIO - JAVASCRIPT
// Advanced Interactions & Animations
// ================================================================

// Real-time clock in navigation
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });
    const navTime = document.querySelector('.nav-time');
    if (navTime) {
        navTime.textContent = `${timeString} UTC`;
    }
}

updateClock();
setInterval(updateClock, 1000);

// Parallax effect for hero layers
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const layers = document.querySelectorAll('.layer');
    
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});

// Custom cursor with trail effect
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: var(--c-accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    mix-blend-mode: difference;
    transition: transform 0.15s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor grows on hover over interactive elements
document.querySelectorAll('a, button, .invention-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for navigation links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.querySelectorAll('.text-block, .metric, .invention-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// Invention item interactions
document.querySelectorAll('.invention-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.item-title').textContent.trim();
        const tech = Array.from(this.querySelectorAll('.item-tech span'))
            .map(s => s.textContent)
            .join(', ');
        
        console.log(`Clicked: ${title}`);
        console.log(`Technologies: ${tech}`);
        
        // Add click animation
        this.style.transform = 'scale(0.98) rotate(0deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
    
    // Random hover rotation variation
    item.addEventListener('mouseenter', function() {
        const randomRotate = (Math.random() - 0.5) * 4;
        this.style.setProperty('--hover-rotate', `${randomRotate}deg`);
    });
});

// Terminal form handling
const terminalForm = document.querySelector('.terminal-form');
if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Simulate terminal output
        const terminalContent = document.querySelector('.terminal-content');
        const successMsg = document.createElement('p');
        successMsg.style.color = 'var(--c-accent)';
        successMsg.textContent = '> Message sent successfully! ✓';
        terminalContent.appendChild(successMsg);
        
        // Reset form
        e.target.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    });
}

// Add typing animation to terminal
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        } else {
            setTimeout(() => {
                typingElement.textContent = '';
                i = 0;
                setTimeout(typeChar, 1000);
            }, 3000);
        }
    }
    
    typeChar();
}

// Random glitch effect on title letters
const titleWords = document.querySelectorAll('.title-break .word');
setInterval(() => {
    const randomWord = titleWords[Math.floor(Math.random() * titleWords.length)];
    randomWord.style.color = 'var(--c-accent)';
    randomWord.style.transform = `translateY(${Math.random() * 10 - 5}px) rotate(${Math.random() * 10 - 5}deg)`;
    
    setTimeout(() => {
        randomWord.style.color = '';
        randomWord.style.transform = '';
    }, 200);
}, 3000);

// Dynamic pattern generation for invention items
function generatePattern(element, patternNum) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.1)';
    ctx.lineWidth = 2;
    
    // Generate different patterns
    switch(patternNum) {
        case 1:
            for (let i = 0; i < 20; i++) {
                ctx.beginPath();
                ctx.arc(Math.random() * 400, Math.random() * 400, Math.random() * 50, 0, Math.PI * 2);
                ctx.stroke();
            }
            break;
        case 2:
            for (let i = 0; i < 30; i++) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * 400, Math.random() * 400);
                ctx.lineTo(Math.random() * 400, Math.random() * 400);
                ctx.stroke();
            }
            break;
    }
    
    element.style.backgroundImage = `url(${canvas.toDataURL()})`;
}

// Apply random patterns
document.querySelectorAll('.item-pattern').forEach((pattern, index) => {
    generatePattern(pattern, (index % 2) + 1);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'H' to scroll to home
    if (e.key === 'h' || e.key === 'H') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'W' to scroll to work
    if (e.key === 'w' || e.key === 'W') {
        document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'C' to scroll to contact
    if (e.key === 'c' || e.key === 'C') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 5000);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttled scroll handler
window.addEventListener('scroll', throttle(() => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent);
}, 100));

// Add noise texture overlay
function createNoiseTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 20;
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const noise = document.createElement('div');
    noise.style.cssText = `
        position: fixed;
        inset: 0;
        background-image: url(${canvas.toDataURL()});
        opacity: 0.03;
        pointer-events: none;
        z-index: 9998;
        mix-blend-mode: overlay;
    `;
    document.body.appendChild(noise);
}

createNoiseTexture();

console.log('%c🚀 EXPERIMENTAL PORTFOLIO LOADED', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cKeyboard shortcuts: H (home), W (work), C (contact)', 'color: #666;');
console.log('%cTry the Konami code for a surprise! ↑↑↓↓←→←→BA', 'color: #666;');
