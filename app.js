// app.js
document.addEventListener('DOMContentLoaded', function () {

    /* ===========================
       HAMBURGER MENU
       =========================== */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const topnav = document.getElementById('topnav');

    if (hamburgerBtn && topnav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            topnav.classList.toggle('active');

            const spans = hamburgerBtn.querySelectorAll('span');
            if (hamburgerBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    /* ===========================
       SMOOTH SCROLL
       =========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                if (hamburgerBtn && hamburgerBtn.classList.contains('active')) {
                    hamburgerBtn.click();
                }
            }
        });
    });

    /* ===========================
       ACTIVE NAV HIGHLIGHT ON SCROLL
       =========================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.topnav a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* ===========================
       VIDEO BACKGROUND FALLBACK
       =========================== */
    const video = document.getElementById('video-background');
    if (video && !video.canPlayType('video/mp4')) {
        video.style.display = 'none';
        const overlay = document.querySelector('.video-overlay');
        if (overlay) overlay.style.background = "#0f0f14";
    }

    /* ===========================
       SCROLL REVEAL ANIMATION
       =========================== */
    const revealElements = document.querySelectorAll('section, .portfolio-item, .testimonial, .vm-card, .contact-card');

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.88;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    /* ===========================
       SHOW CONTAINER AFTER LOAD
       =========================== */
    window.addEventListener('load', () => {
        const container = document.querySelector('.container');
        if (container) container.style.opacity = '1';
    });
});
