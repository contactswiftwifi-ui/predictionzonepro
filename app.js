// PZP Landing Page - cinematic single-screen Telegram landing page

(function() {
    'use strict';

    const TELEGRAM_URL = 'https://t.me/+hG27Gt41OrhmYTM1';

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticle(container, index, isGold) {
        const particle = document.createElement('span');
        const isSpark = Math.random() > 0.9;

        particle.className = `particle${isGold ? ' gold' : ' blue'}${isSpark ? ' spark' : ''}`;

        let x;
        let y;

        if (isGold) {
            const clustered = Math.random() > 0.14;
            x = clustered ? random(66, 101) : random(54, 100);
            y = clustered ? random(50, 103) : random(34, 100);
        } else {
            x = random(0, 100);
            y = Math.random() > 0.72 ? random(0, 42) : random(0, 100);
        }

        const size = isSpark ? random(2, 4.2) : random(0.7, isGold ? 3 : 2.6);
        const opacity = isGold ? random(0.28, 0.82) : random(0.18, 0.76);
        const duration = random(24, 58);
        const dx = `${random(-34, 34)}px`;
        const dy = `${random(-38, 38)}px`;

        particle.style.setProperty('--x', `${x}%`);
        particle.style.setProperty('--y', `${y}%`);
        particle.style.setProperty('--size', `${size}px`);
        particle.style.setProperty('--opacity', opacity.toFixed(2));
        particle.style.setProperty('--duration', `${duration.toFixed(2)}s`);
        particle.style.setProperty('--delay', `${random(-58, 0).toFixed(2)}s`);
        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);
        particle.style.setProperty('--scale', random(0.72, 1.35).toFixed(2));
        particle.style.setProperty('--glow', `${random(5, isGold ? 14 : 12).toFixed(1)}px`);
        particle.style.setProperty('--color', isGold ? '#FFC642' : '#15AFFF');
        particle.style.zIndex = String(index % 3);

        container.appendChild(particle);
    }

    function generateParticles() {
        const container = document.getElementById('particles');

        if (!container || container.children.length) {
            return;
        }

        const particleCount = window.matchMedia('(max-width: 420px)').matches ? 218 : 299;
        const goldCount = Math.round(particleCount * 0.15);
        const blueCount = particleCount - goldCount;

        for (let i = 0; i < blueCount; i++) {
            createParticle(container, i, false);
        }

        for (let i = 0; i < goldCount; i++) {
            createParticle(container, blueCount + i, true);
        }
    }

    function initializeInteractions() {
        const telegramButton = document.querySelector('.telegram-button');
        const heroSection = document.getElementById('hero-section');

        if (telegramButton) {
            telegramButton.addEventListener('click', function() {
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });

            telegramButton.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });

            telegramButton.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });
        }

        if (heroSection) {
            heroSection.style.cursor = 'pointer';
            heroSection.addEventListener('click', function(event) {
                if (event.target.closest('.telegram-button')) {
                    return;
                }

                window.open(TELEGRAM_URL, '_blank');

                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });
        }
    }

    function preloadLogo() {
        const logo = document.querySelector('.logo');

        if (logo && logo.src) {
            const img = new Image();
            img.src = logo.src;
        }
    }

    document.addEventListener('selectstart', function(event) {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    });

    document.addEventListener('touchmove', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('DOMContentLoaded', function() {
        generateParticles();
        initializeInteractions();
        preloadLogo();
    });
})();
