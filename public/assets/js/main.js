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

    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
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

    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => observer.observe(el));

    const grids = document.querySelectorAll('.projects-grid, .tech-grid, .team-grid, .values-grid, .services-detail-grid');
    grids.forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            if (!child.classList.contains('fade-in') && !child.classList.contains('fade-in-left') && !child.classList.contains('fade-in-right') && !child.classList.contains('scale-in')) {
                child.classList.add('fade-in', `stagger-${(index % 6) + 1}`);
                observer.observe(child);
            }
        });
    });

    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax-speed'));
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.style.transform = `translateY(${scrollY * speed}px)`;
                }
            });
        });
    }

    const heroTexts = document.querySelectorAll('.hero-text-item');
    if (heroTexts.length > 0) {
        let currentIndex = 0;

        function cycleText() {
            heroTexts.forEach(el => {
                el.classList.remove('active');
                el.style.animation = 'none';
            });
            currentIndex = (currentIndex + 1) % heroTexts.length;
            heroTexts[currentIndex].classList.add('active');
            heroTexts[currentIndex].style.animation = 'slideIn 0.5s ease forwards';
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

    const carouselStage = document.querySelector('.carousel-3d-stage');
    const carouselCards = document.querySelectorAll('.carousel-3d-card');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let currentRotation = 0;

    if (carouselStage && carouselCards.length > 0) {
        const cardCount = carouselCards.length;
        const angle = 360 / cardCount;
        const radius = 420;

        carouselCards.forEach((card, i) => {
            const theta = angle * i;
            card.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
        });

        function rotateCarousel(deg) {
            currentRotation += deg;
            carouselStage.style.transform = `rotateY(${currentRotation}deg)`;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => rotateCarousel(angle));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => rotateCarousel(-angle));
        }

        let autoRotate = setInterval(() => rotateCarousel(-angle * 0.05), 30);

        const wrapper = document.querySelector('.carousel-3d-wrapper');
        if (wrapper) {
            wrapper.addEventListener('mouseenter', () => clearInterval(autoRotate));
            wrapper.addEventListener('mouseleave', () => {
                autoRotate = setInterval(() => rotateCarousel(-angle * 0.05), 30);
            });
        }
    }

    // ===== TECH MARQUEE =====
    const techsRow1 = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ];

    const techsRow2 = [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ];

    function buildRow(el, techs) {
        const doubled = [...techs, ...techs];
        el.innerHTML = doubled.map(t => `
            <div class="tech-pill">
                <img src="${t.icon}" alt="${t.name}" loading="lazy">
                <span>${t.name}</span>
            </div>
        `).join('');
    }

    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
    if (row1) buildRow(row1, techsRow1);
    if (row2) buildRow(row2, techsRow2);
});
