@extends('layouts.app')

@section('title', 'Accueil')

@section('content')

<section id="hero">
    <div class="hero-bg-shapes">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
    </div>
    <div class="hero-grid-overlay"></div>

    <div class="hero-container">
        <div class="hero-text">
            <div class="hero-badge">
                <span class="hero-badge-dot"></span>
                Agence Web Créative
            </div>

            <h1>Nous construisons le <span class="accent">web de demain</span></h1>

            <p class="hero-description">
                Conception et développement de solutions web innovantes, performantes et sur mesure pour propulser votre entreprise dans l'ère digitale.
            </p>

            <div class="hero-text-animated" id="heroAnimatedText">
                <p class="hero-text-item active">
                    <span class="check-icon"><i class="fas fa-check-circle"></i></span>
                    Sites vitrines élégants et performants
                </p>
                <p class="hero-text-item">
                    <span class="check-icon"><i class="fas fa-check-circle"></i></span>
                    Applications web sur mesure et scalables
                </p>
                <p class="hero-text-item">
                    <span class="check-icon"><i class="fas fa-check-circle"></i></span>
                    Expériences digitales mémorables
                </p>
            </div>

            <div class="hero-buttons">
                <a href="{{ route('contact') }}" class="btn-primary">Démarrer un projet</a>
                <a href="{{ route('projets') }}" class="btn-secondary">Voir nos projets</a>
            </div>

            <div class="hero-stats">
                <div class="hero-stat">
                    <h3>50+</h3>
                    <p>Projets livrés</p>
                </div>
                <div class="hero-stat">
                    <h3>30+</h3>
                    <p>Clients satisfaits</p>
                </div>
                <div class="hero-stat">
                    <h3>5+</h3>
                    <p>Années d'XP</p>
                </div>
            </div>
        </div>

        <div class="hero-visual">
            <div class="hero-image-wrapper">
                <div class="hero-decoration"></div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Développement Web" class="hero-main-image">

                <div class="hero-floating-card hero-floating-card-1">
                    <div class="floating-icon"><i class="fas fa-code"></i></div>
                    <div class="floating-text">
                        <h4>Code propre</h4>
                        <p>Standards modernes</p>
                    </div>
                </div>

                <div class="hero-floating-card hero-floating-card-2">
                    <div class="floating-icon"><i class="fas fa-bolt"></i></div>
                    <div class="floating-text">
                        <h4>Performance</h4>
                        <p>Score 95+</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container">
        <div class="about-grid">
            <div class="about-image fade-in">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Notre équipe">
            </div>
            <div class="about-text fade-in">
                <h2>Qui <span>sommes-nous</span> ?</h2>
                <p>CameleonLab est une agence spécialisée dans la conception et le développement de solutions web innovantes. Notre équipe passionnée combine expertise technique et créativité pour donner vie à vos projets digitaux.</p>
                <p>Nous accompagnons les entreprises de toutes tailles dans leur transformation numérique en proposant des solutions sur mesure, performantes et évolutives.</p>
                <a href="{{ route('apropos') }}" class="btn-secondary">En savoir plus</a>

                <div class="about-stats">
                    <div class="stat-item">
                        <h3>50+</h3>
                        <p>Projets réalisés</p>
                    </div>
                    <div class="stat-item">
                        <h3>30+</h3>
                        <p>Clients satisfaits</p>
                    </div>
                    <div class="stat-item">
                        <h3>5+</h3>
                        <p>Années d'expérience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="expertise">
    <div class="container">
        <div class="section-title">
            <h2>Nos <span>Expertises</span></h2>
            <p>Des solutions complètes pour répondre à tous vos besoins digitaux</p>
        </div>

        <div class="expertise-grid">
            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-laptop-code"></i></div>
                <h3>Développement Web</h3>
                <p>Création de sites web modernes, responsive et optimisés pour le référencement. Nous utilisons les dernières technologies pour des performances maximales.</p>
            </div>

            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-mobile-alt"></i></div>
                <h3>Applications Mobiles</h3>
                <p>Conception d'applications mobiles natives et cross-platform pour iOS et Android avec une expérience utilisateur fluide.</p>
            </div>

            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-paint-brush"></i></div>
                <h3>Design UI/UX</h3>
                <p>Création d'interfaces intuitives et esthétiques qui captivent vos utilisateurs et renforcent votre identité de marque.</p>
            </div>

            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-shopping-cart"></i></div>
                <h3>E-Commerce</h3>
                <p>Développement de boutiques en ligne performantes avec gestion des paiements, stocks et livraison intégrée.</p>
            </div>

            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-cogs"></i></div>
                <h3>Back-end & API</h3>
                <p>Architecture robuste et scalable, APIs RESTful et GraphQL pour connecter vos systèmes et automatiser vos processus.</p>
            </div>

            <div class="expertise-card fade-in">
                <div class="expertise-icon"><i class="fas fa-chart-line"></i></div>
                <h3>SEO & Marketing</h3>
                <p>Optimisation pour les moteurs de recherche et stratégies digitales pour augmenter votre visibilité en ligne.</p>
            </div>
        </div>
    </div>
</section>

<section id="technologies">
    <div class="container">
        <div class="section-title">
            <h2>Technologies <span>Maîtrisées</span></h2>
            <p>Les outils et frameworks que nous utilisons au quotidien</p>
        </div>

        <div class="tech-columns">
            <div class="tech-category">
                <h3><i class="fa-solid fa-code"></i> Langages</h3>
                <div class="tech-grid">
                    <div class="tech-item fade-in"><i class="devicon-html5-plain colored" title="HTML5"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-css3-plain colored" title="CSS3"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-javascript-plain colored" title="JavaScript"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-typescript-plain colored" title="TypeScript"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-php-plain" title="PHP"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-python-plain colored" title="Python"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-java-plain" title="Java"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-cplusplus-plain colored" title="C++"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-swift-plain colored" title="Swift"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-kotlin-plain colored" title="Kotlin"></i></div>
                </div>
            </div>

            <div class="tech-category">
                <h3><i class="fa-solid fa-layer-group"></i> Frameworks</h3>
                <div class="tech-grid">
                    <div class="tech-item fade-in"><i class="devicon-laravel-plain colored" title="Laravel"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-react-original colored" title="React"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-vuejs-plain colored" title="Vue.js"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-angularjs-plain colored" title="Angular"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-wordpress-plain colored" title="WordPress"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-tailwindcss-original colored" title="Tailwind CSS"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-nodejs-plain colored" title="Node.js"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-django-plain colored" title="Django"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-flask-original colored" title="Flask"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-spring-plain colored" title="Spring Boot"></i></div>
                </div>
            </div>

            <div class="tech-category">
                <h3><i class="fa-solid fa-database"></i> Bases de Données & Outils</h3>
                <div class="tech-grid">
                    <div class="tech-item fade-in"><i class="devicon-mysql-plain colored" title="MySQL"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-postgresql-plain colored" title="PostgreSQL"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-mongodb-plain colored" title="MongoDB"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-redis-plain colored" title="Redis"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-sqlite-plain colored" title="SQLite"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-firebase-plain colored" title="Firebase"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-docker-plain colored" title="Docker"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-git-plain colored" title="Git"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-github-original" title="GitHub"></i></div>
                    <div class="tech-item fade-in"><i class="devicon-vscode-plain colored" title="VS Code"></i></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="projets-home">
    <div class="container">
        <div class="section-title">
            <h2>Nos <span>Réalisations</span></h2>
            <p>Découvrez quelques-uns de nos projets récents</p>
        </div>

        <div class="projects-grid">
            <div class="project-card fade-in">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Dashboard SaaS">
                    <div class="project-overlay">
                        <a href="{{ route('projets') }}">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Dashboard SaaS</h3>
                    <p>Plateforme de gestion et d'analytics en temps réel pour entreprises.</p>
                    <div class="project-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>

            <div class="project-card fade-in">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="E-Commerce">
                    <div class="project-overlay">
                        <a href="{{ route('projets') }}">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Boutique E-Commerce</h3>
                    <p>Site e-commerce complet avec paiement sécurisé et gestion des stocks.</p>
                    <div class="project-tags">
                        <span>Laravel</span>
                        <span>Vue.js</span>
                        <span>Stripe</span>
                    </div>
                </div>
            </div>

            <div class="project-card fade-in">
                <div class="project-image">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80" alt="Application Mobile">
                    <div class="project-overlay">
                        <a href="{{ route('projets') }}">Voir le projet</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Application Mobile</h3>
                    <p>Application de livraison avec suivi en temps réel et notifications push.</p>
                    <div class="project-tags">
                        <span>React Native</span>
                        <span>Firebase</span>
                        <span>API</span>
                    </div>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 50px;">
            <a href="{{ route('projets') }}" class="btn-secondary">Voir tous nos projets</a>
        </div>
    </div>
</section>

<section id="contact">
    <div class="container">
        <div class="section-title">
            <h2>Contactez-<span>nous</span></h2>
            <p>Parlons de votre projet et donnons-lui vie ensemble</p>
        </div>

        <div class="contact-grid">
            <div class="contact-info fade-in">
                <h3>Discutons de votre projet</h3>
                <p>N'hésitez pas à nous contacter pour toute question ou demande de devis. Notre équipe vous répondra dans les plus brefs délais.</p>

                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-item-text">
                            <h4>Email</h4>
                            <p>contact@cameleonlab.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><i class="fas fa-phone"></i></div>
                        <div class="contact-item-text">
                            <h4>Téléphone</h4>
                            <p>+243 000 000 000</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="contact-item-text">
                            <h4>Adresse</h4>
                            <p>Kinshasa, RDC</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-form fade-in">
                @if(session('success'))
                    <div class="alert alert-success">{{ session('success') }}</div>
                @endif
                @if($errors->any())
                    <div class="alert alert-error">
                        @foreach($errors->all() as $error)
                            <div>{{ $error }}</div>
                        @endforeach
                    </div>
                @endif
                <form action="{{ route('contact.send') }}" method="POST">
                    @csrf
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nom">Nom complet</label>
                            <input type="text" id="nom" name="user_name" placeholder="Votre nom" value="{{ old('user_name') }}" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="user_email" placeholder="votre@email.com" value="{{ old('user_email') }}" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sujet">Sujet</label>
                        <input type="text" id="sujet" name="subject" placeholder="Sujet de votre message" value="{{ old('subject') }}">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Décrivez votre projet..." required>{{ old('message') }}</textarea>
                    </div>
                    <button type="submit" class="btn-primary">Envoyer le message</button>
                </form>
            </div>
        </div>
    </div>
</section>

@endsection
