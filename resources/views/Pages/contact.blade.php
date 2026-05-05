@extends('layouts.app')

@section('title', 'Contact')

@section('content')

<div class="page-hero">
    <div class="container">
        <h1>Contactez-nous</h1>
        <p>Parlons de votre projet et donnons-lui vie ensemble</p>
        <div class="breadcrumb">
            <a href="{{ route('home') }}">Accueil</a>
            <span>/</span>
            <span>Contact</span>
        </div>
    </div>
</div>

<section>
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info fade-in">
                <h3>Nous sommes à votre écoute</h3>
                <p>Vous avez un projet en tête ? Une question ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les 24 heures.</p>

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
                            <p>Kinshasa, République Démocratique du Congo</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-icon"><i class="fas fa-clock"></i></div>
                        <div class="contact-item-text">
                            <h4>Horaires</h4>
                            <p>Lun - Ven: 8h00 - 17h00</p>
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
                            <label for="nom">Nom complet *</label>
                            <input type="text" id="nom" name="user_name" placeholder="Votre nom" value="{{ old('user_name') }}" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="user_email" placeholder="votre@email.com" value="{{ old('user_email') }}" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sujet">Sujet</label>
                        <input type="text" id="sujet" name="subject" placeholder="Sujet de votre message" value="{{ old('subject') }}">
                    </div>
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" placeholder="Décrivez votre projet ou votre demande..." required>{{ old('message') }}</textarea>
                    </div>
                    <button type="submit" class="btn-primary">Envoyer le message</button>
                </form>
            </div>
        </div>
    </div>
</section>

@endsection
