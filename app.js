// PZP Landing Page - Premium Telegram Conversion Page
// Enhanced with particles, advanced animations, and staggered load sequence

(function() {
    'use strict';

    // Generate floating particles
    function generateParticles() {
        const container = document.getElementById('particles');
        const particleCount = 18;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 1px and 4px
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            
            // Random opacity between 0.1 and 0.4
            const opacity = Math.random() * 0.3 + 0.1;
            particle.style.opacity = opacity;
            
            // Random animation duration between 15-30 seconds
            const duration = Math.random() * 15 + 15;
            const delay = Math.random() * 5;
            particle.style.animation = `particle-float ${duration}s linear infinite ${delay}s`;
            
            container.appendChild(particle);
        }
    }

    // Add particle animation keyframes dynamically
    function injectParticleStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particle-float {
                0% {
                    transform: translate(0, 0) scale(1);
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.8);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1);
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.9);
                }
                100% {
                    transform: translate(0, 0) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Create individual animations for each particle using CSS
    function createParticleAnimations() {
        const style = document.createElement('style');
        let keyframes = '';
        
        for (let i = 0; i < 18; i++) {
            const moveX = (Math.random() - 0.5) * 200;
            const moveY = (Math.random() - 0.5) * 200;
            const duration = Math.random() * 15 + 15;
            
            keyframes += `
                .particle:nth-child(${i + 1}) {
                    animation: particle-float-${i} ${duration}s ease-in-out infinite !important;
                }
                
                @keyframes particle-float-${i} {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: var(--particle-opacity);
                    }
                    50% {
                        transform: translate(${moveX}px, ${moveY}px) scale(1.2);
                        opacity: calc(var(--particle-opacity) * 0.5);
                    }
                }
            `;
        }
        
        style.textContent = keyframes;
        document.head.appendChild(style);
    }

    // Initialize animations on page load
    function initializeAnimations() {
        // Get all animated elements
        const background = document.querySelector('.background');
        const logo = document.querySelector('.logo');
        const badge = document.querySelector('.premium-badge');
        const headline = document.querySelector('.headline');
        const subtitle = document.querySelector('.subtitle');
        const button = document.querySelector('.telegram-button');
        
        // Staggered entrance animation sequence
        const sequence = [
            { element: background, delay: 0 },
            { element: logo, delay: 100 },
            { element: badge, delay: 200 },
            { element: headline, delay: 300 },
            { element: subtitle, delay: 400 },
            { element: button, delay: 500 }
        ];
        
        // Log animation sequence start
        console.log('PZP Landing Page loaded - Animation sequence started');
    }

    // Prevent accidental selection during animations
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Optimize for mobile - prevent pull-to-refresh on Chrome
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Enhance button interaction for mobile
    const telegramButton = document.querySelector('.telegram-button');
    
    if (telegramButton) {
        // Add haptic feedback on mobile (if available)
        telegramButton.addEventListener('click', function(e) {
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });

        // Smooth interaction feedback
        telegramButton.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97)';
        });

        telegramButton.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    }

    // Make entire hero section clickable
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.style.cursor = 'pointer';
        heroSection.addEventListener('click', function(e) {
            // Don't trigger if clicking the button itself
            if (e.target.closest('.telegram-button')) {
                return;
            }
            // Open Telegram
            window.open('https://t.me/+hG27Gt41OrhmYTM1', '_blank');
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });

        // Add touch feedback to hero section
        heroSection.addEventListener('touchstart', function() {
            this.style.opacity = '0.95';
        });

        heroSection.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    }

    // Preload logo for instant display
    const logo = document.querySelector('.logo');
    if (logo && logo.src) {
        const img = new Image();
        img.src = logo.src;
    }

    // Generate particles on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        generateParticles();
        createParticleAnimations();
        initializeAnimations();
    });

    // Log page load performance
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log('Page fully loaded in ' + pageLoadTime + 'ms');
        });
    }

})();

