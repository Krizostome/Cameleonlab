@extends('layouts.app')

@section('title', 'Services')

@section('content')

<div class="page-hero">
    <div class="container">
        <h1>Nos Services</h1>
        <p>Des solutions web complètes pour votre réussite digitale</p>
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Accueil</a>
            <span>/</span>
            <span>Services</span>
        </div>
    </div>
</div>

<section>
    <div class="container">
        <div class="section-title">
            <h2>Ce que nous <span>offrons</span></h2>
            <p>Des services complets pour couvrir tous vos besoins digitaux</p>
        </div>

        <div class="services-detail-grid">
            <div class="service-detail-card fade-in">
                <div class="service-num">01</div>
                <h3>Site Vitrine</h3>
                <p>Un site web élégant qui présente votre entreprise et vos services de manière professionnelle.</p>
                <ul>
                    <li>Design personnalisé</li>
                    <li>Responsive design</li>
                    <li>Optimisation SEO</li>
                    <li>Formulaire de contact</li>
                </ul>
            </div>

            <div class="service-detail-card fade-in">
                <div class="service-num">02</div>
                <h3>Application Web</h3>
                <p>Des applications web performantes et interactives pour automatiser vos processus métier.</p>
                <ul>
                    <li>Architecture sur mesure</li>
                    <li>Base de données optimisée</li>
                    <li>Tableau de bord admin</li>
                    <li>APIs sécurisées</li>
                </ul>
            </div>

            <div class="service-detail-card fade-in">
                <div class="service-num">03</div>
                <h3>E-Commerce</h3>
                <p>Une boutique en ligne complète pour vendre vos produits et gérer vos commandes efficacement.</p>
                <ul>
                    <li>Catalogue produits</li>
                    <li>Paiement sécurisé</li>
                    <li>Gestion des stocks</li>
                    <li>Suivi des commandes</li>
                </ul>
            </div>

            <div class="service-detail-card fade-in">
                <div class="service-num">04</div>
                <h3>Design UI/UX</h3>
                <p>Des interfaces utilisateur intuitives et esthétiques qui offrent une expérience mémorable.</p>
                <ul>
                    <li>Maquettes interactives</li>
                    <li>Prototypage</li>
                    <li>Tests utilisateurs</li>
                    <li>Design system</li>
                </ul>
            </div>

            <div class="service-detail-card fade-in">
                <div class="service-num">05</div>
                <h3>Application Mobile</h3>
                <p>Des applications mobiles natives et cross-platform pour iOS et Android.</p>
                <ul>
                    <li>React Native / Flutter</li>
                    <li>Notifications push</li>
                    <li>Mode hors-ligne</li>
                    <li>Publication stores</li>
                </ul>
            </div>

            <div class="service-detail-card fade-in">
                <div class="service-num">06</div>
                <h3>Maintenance & Support</h3>
                <p>Un accompagnement continu pour assurer la performance et la sécurité de vos projets.</p>
                <ul>
                    <li>Mises à jour régulières</li>
                    <li>Monitoring 24/7</li>
                    <li>Backups automatiques</li>
                    <li>Support technique</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-title">
            <h2>Notre <span>Processus</span></h2>
            <p>Une méthodologie éprouvée pour garantir le succès de chaque projet</p>
        </div>

        <div id="react-timeline-root" class="w-full min-h-screen"></div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Prêt à lancer votre projet ?</h2>
            <p>Choisissez le service qui correspond à vos besoins et contactez-nous pour obtenir un devis gratuit et personnalisé.</p>
            <div class="cta-buttons">
                <a href="{{ route('contact') }}" class="btn-primary btn-cta">Demander un devis</a>
                <a href="{{ route('projets') }}" class="btn-secondary btn-cta">Voir nos projets</a>
            </div>
        </div>
    </div>
</section>

@endsection
