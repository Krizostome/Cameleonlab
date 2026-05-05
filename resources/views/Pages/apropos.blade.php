@extends('layouts.app')

@section('title', 'À Propos')

@section('content')

<div class="page-hero">
    <div class="container">
        <h1>À Propos</h1>
        <p>Découvrez qui nous sommes et ce qui nous motive</p>
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Accueil</a>
            <span>/</span>
            <span>À Propos</span>
        </div>
    </div>
</div>

<section class="about-page-content">
    <div class="container">
        <div class="about-page-grid">
            <div class="about-page-text fade-in">
                <h3>Notre <span>Histoire</span></h3>
                <p>Fondée avec la passion de transformer le paysage digital, CameleonLab est née de la vision d'une équipe d'experts convaincus que la technologie peut résoudre les problèmes les plus complexes.</p>
                <p>Depuis notre création, nous avons accompagné des dizaines d'entreprises dans leur transformation numérique, en créant des solutions web innovantes et sur mesure qui répondent à leurs besoins spécifiques.</p>
                <p>Notre approche combine expertise technique, créativité et écoute attentive pour délivrer des projets qui dépassent les attentes de nos clients.</p>
            </div>
            <div class="about-page-image fade-in">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Notre histoire">
            </div>
        </div>

        <div class="about-page-grid reverse">
            <div class="about-page-image fade-in">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Notre mission">
            </div>
            <div class="about-page-text fade-in">
                <h3>Notre <span>Mission</span></h3>
                <p>Notre mission est de démocratiser l'accès à des solutions web de qualité professionnelle. Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une présence digitale forte et impactante.</p>
                <p>Nous nous engageons à fournir des solutions performantes, sécurisées et évolutives qui permettent à nos clients de se concentrer sur leur cœur de métier tout en ayant une présence digitale optimale.</p>
                <p>Chaque projet est une opportunité de créer quelque chose d'unique et de contribuer au succès de nos partenaires.</p>
            </div>
        </div>

        <div class="section-title" style="margin-top: 80px;">
            <h2>Nos <span>Valeurs</span></h2>
            <p>Les principes qui guident chacune de nos actions</p>
        </div>

        <div class="values-grid">
            <div class="value-card fade-in">
                <div class="value-icon"><i class="fas fa-lightbulb"></i></div>
                <h4>Innovation</h4>
                <p>Nous restons à la pointe des technologies pour offrir des solutions modernes et compétitives.</p>
            </div>
            <div class="value-card fade-in">
                <div class="value-icon"><i class="fas fa-handshake"></i></div>
                <h4>Collaboration</h4>
                <p>Le travail en équipe et la communication transparente sont au cœur de notre processus.</p>
            </div>
            <div class="value-card fade-in">
                <div class="value-icon"><i class="fas fa-star"></i></div>
                <h4>Excellence</h4>
                <p>Nous visons la qualité maximale dans chaque ligne de code et chaque pixel de design.</p>
            </div>
            <div class="value-card fade-in">
                <div class="value-icon"><i class="fas fa-shield-alt"></i></div>
                <h4>Confiance</h4>
                <p>La transparence et l'honnêteté sont les fondements de nos relations clients.</p>
            </div>
        </div>

        <div class="section-title" style="margin-top: 80px;">
            <h2>Notre <span>Équipe</span></h2>
            <p>Les talents qui font la force de CameleonLab</p>
        </div>

        <div class="team-grid">
            <div class="team-card fade-in">
                <div class="team-avatar">JD</div>
                <h4>Jean Dupont</h4>
                <p>CEO & Fondateur</p>
            </div>
            <div class="team-card fade-in">
                <div class="team-avatar">ML</div>
                <h4>Marie Laurent</h4>
                <p>Lead Developer</p>
            </div>
            <div class="team-card fade-in">
                <div class="team-avatar">PB</div>
                <h4>Pierre Bernard</h4>
                <p>Designer UI/UX</p>
            </div>
            <div class="team-card fade-in">
                <div class="team-avatar">SC</div>
                <h4>Sophie Chen</h4>
                <p>Project Manager</p>
            </div>
        </div>
    </div>
</section>

@endsection
