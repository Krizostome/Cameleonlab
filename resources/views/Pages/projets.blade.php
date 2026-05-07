@extends('layouts.app')

@section('title', 'Projets')

@section('content')

<div class="page-hero">
    <div class="container">
        <h1>Nos Projets</h1>
        <p>Découvrez nos réalisations qui témoignent de notre expertise</p>
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Accueil</a>
            <span>/</span>
            <span>Projets</span>
        </div>
    </div>
</div>

<section>
    <div class="container">
        <div class="projects-filter">
            <button class="filter-btn active" data-filter="all"><span>Tous</span></button>
            <button class="filter-btn" data-filter="web"><span>Web</span></button>
            <button class="filter-btn" data-filter="mobile"><span>Mobile</span></button>
            <button class="filter-btn" data-filter="ecommerce"><span>E-Commerce</span></button>
            <button class="filter-btn" data-filter="uiux"><span>UI/UX</span></button>
        </div>

        <div class="projects-grid" id="projectsGrid">
            <div class="project-card" data-category="web">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Dashboard SaaS">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Dashboard SaaS Analytics</h3>
                    <p>Plateforme de gestion et d'analytics en temps réel avec des tableaux de bord personnalisables.</p>
                    <div class="project-tags">
                        <span>React</span><span>Node.js</span><span>MongoDB</span>
                    </div>
                </div>
            </div>

            <div class="project-card" data-category="ecommerce">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="E-Commerce">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Boutique E-Commerce Mode</h3>
                    <p>Site e-commerce complet avec catalogue produits, panier et paiement sécurisé.</p>
                    <div class="project-tags">
                        <span>Laravel</span><span>Vue.js</span><span>Stripe</span>
                    </div>
                </div>
            </div>

            <div class="project-card" data-category="mobile">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80" alt="App Livraison">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Application de Livraison</h3>
                    <p>Application mobile avec suivi en temps réel et notifications push.</p>
                    <div class="project-tags">
                        <span>React Native</span><span>Firebase</span><span>Google Maps</span>
                    </div>
                </div>
            </div>

            <div class="project-card" data-category="uiux">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Site Corporate">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Site Corporate Finance</h3>
                    <p>Site vitrine élégant pour un cabinet financier avec blog intégré.</p>
                    <div class="project-tags">
                        <span>Next.js</span><span>Tailwind</span><span>Sanity CMS</span>
                    </div>
                </div>
            </div>

            <div class="project-card" data-category="mobile">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="App Santé">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Application Santé & Bien-être</h3>
                    <p>Application de suivi santé avec planification de rendez-vous et rappels.</p>
                    <div class="project-tags">
                        <span>Flutter</span><span>Node.js</span><span>PostgreSQL</span>
                    </div>
                </div>
            </div>

            <div class="project-card" data-category="web">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="E-Learning">
                    <div class="project-overlay">
                        <a href="#">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Plateforme E-Learning</h3>
                    <p>Plateforme de formation en ligne avec cours vidéo et certifications.</p>
                    <div class="project-tags">
                        <span>Laravel</span><span>React</span><span>AWS S3</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="react-projects-root"></div>

<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Vous avez un projet en tête ?</h2>
            <p>Discutons ensemble de votre projet et transformons votre vision en réalité digitale. Notre équipe est prête à vous accompagner.</p>
            <div class="cta-buttons">
                <a href="{{ route('contact') }}" class="btn-primary btn-cta">Démarrer un projet</a>
                <a href="{{ route('services') }}" class="btn-secondary btn-cta">Nos services</a>
            </div>
        </div>
    </div>
</section>

@endsection
