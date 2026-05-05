<nav id="navbar">
    <a href="{{ route('home') }}" class="nav-logo">
        <div class="logo-icon"><img src="{{ asset('assets/images/cameleonlab.jpeg') }}" alt="Logo"></div>
        <span class="logo-text">Cameleon<span>Lab</span></span>
    </a>

    <ul class="nav-links" id="navLinks">
        <li><a href="{{ route('home') }}">Accueil</a></li>
        <li><a href="{{ route('apropos') }}">À Propos</a></li>
        <li><a href="{{ route('services') }}">Services</a></li>
        <li><a href="{{ route('projets') }}">Projets</a></li>
        <li><a href="{{ route('contact') }}" class="nav-cta">Contact</a></li>
    </ul>

    <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
    </button>
</nav>
