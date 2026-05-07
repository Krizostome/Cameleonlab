@extends('layouts.app')

@section('title', 'Accueil')

@section('content')

<div id="react-hero-root"></div>

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

        <div class="expertise-stairs">
            <div class="expertise-line"></div>

            <div class="stair-item stair-left fade-in-left">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">01</div>
                    <div class="stair-icon"><i class="fas fa-laptop-code"></i></div>
                    <h3>Développement Web</h3>
                    <p>Sites modernes, responsives & optimisés SEO. Performances maximales avec les dernières technologies.</p>
                    <ul class="stair-features">
                        <li>Sites vitrine & institutionnels</li>
                        <li>Applications web sur-mesure</li>
                        <li>Optimisation SEO & performances</li>
                    </ul>
                </div>
            </div>

            <div class="stair-item stair-right fade-in-right">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">02</div>
                    <div class="stair-icon"><i class="fas fa-mobile-alt"></i></div>
                    <h3>Applications Mobiles</h3>
                    <p>Apps natives & cross-platform pour iOS et Android. Une expérience utilisateur fluide et engageante.</p>
                    <ul class="stair-features">
                        <li>iOS & Android natif</li>
                        <li>Cross-platform (React Native, Flutter)</li>
                        <li>API & synchronisation temps réel</li>
                    </ul>
                </div>
            </div>

            <div class="stair-item stair-left fade-in-left">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">03</div>
                    <div class="stair-icon"><i class="fas fa-paint-brush"></i></div>
                    <h3>Design UI/UX</h3>
                    <p>Interfaces intuitives et esthétiques qui captivent vos utilisateurs et renforcent votre marque.</p>
                    <ul class="stair-features">
                        <li>Wireframes & prototypage interactif</li>
                        <li>Design system & charte graphique</li>
                        <li>Tests utilisateurs & itérations</li>
                    </ul>
                </div>
            </div>

            <div class="stair-item stair-right fade-in-right">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">04</div>
                    <div class="stair-icon"><i class="fas fa-shopping-cart"></i></div>
                    <h3>E-Commerce</h3>
                    <p>Boutiques en ligne performantes avec paiement sécurisé, gestion des stocks et livraison intégrée.</p>
                    <ul class="stair-features">
                        <li>Shopify, WooCommerce, Magento</li>
                        <li>Paiement sécurisé multi-moyens</li>
                        <li>Gestion stocks & logistique</li>
                    </ul>
                </div>
            </div>

            <div class="stair-item stair-left fade-in-left">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">05</div>
                    <div class="stair-icon"><i class="fas fa-cogs"></i></div>
                    <h3>Back-end & API</h3>
                    <p>Architecture robuste et scalable. APIs RESTful et GraphQL pour connecter et automatiser vos systèmes.</p>
                    <ul class="stair-features">
                        <li>APIs RESTful & GraphQL</li>
                        <li>Architecture micro-services</li>
                        <li>Base de données & cloud</li>
                    </ul>
                </div>
            </div>

            <div class="stair-item stair-right fade-in-right">
                <div class="stair-dot"></div>
                <div class="stair-card">
                    <div class="stair-number">06</div>
                    <div class="stair-icon"><i class="fas fa-chart-line"></i></div>
                    <h3>SEO & Marketing</h3>
                    <p> Stratégies digitales pour augmenter votre visibilité et attirer plus de clients qualifiés.</p>
                    <ul class="stair-features">
                        <li>SEO technique & contenu</li>
                        <li>Stratégie social media</li>
                        <li>Analytics & reporting</li>
                    </ul>
                </div>
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

        <div class="tech-marquee-modern">
            <div class="marquee-row" id="row1"></div>
            <div class="marquee-row" id="row2"></div>
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
