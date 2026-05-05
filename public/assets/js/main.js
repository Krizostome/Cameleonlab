document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    const heroTexts = document.querySelectorAll('.hero-text-item');
    if (heroTexts.length > 0) {
        let currentIndex = 0;

        function cycleText() {
            heroTexts.forEach(el => el.classList.remove('active'));
            currentIndex = (currentIndex + 1) % heroTexts.length;
            heroTexts[currentIndex].classList.add('active');
        }

        setInterval(cycleText, 3000);
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('#projectsGrid .project-card');

    if (filterBtns.length > 0 && projects.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projects.forEach(project => {
                    const category = project.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        project.style.display = 'block';
                        project.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    const statItems = document.querySelectorAll('.stat-item h3, .hero-stat h3');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalCount = parseInt(target.textContent);
                if (!isNaN(finalCount)) {
                    animateCount(target, 0, finalCount, 2000);
                }
                countObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(item => countObserver.observe(item));

    function animateCount(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }
});
