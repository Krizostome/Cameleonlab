<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <h3>Cameleon<span>Lab</span></h3>
                <p>Nous concevons et développons des solutions web innovantes pour transformer votre présence digitale.</p>
                <div class="footer-social">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <div class="footer-links">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="{{ route('home') }}">Accueil</a></li>
                    <li><a href="{{ route('apropos') }}">À Propos</a></li>
                    <li><a href="{{ route('services') }}">Services</a></li>
                    <li><a href="{{ route('projets') }}">Projets</a></li>
                    <li><a href="{{ route('contact') }}">Contact</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Services</h4>
                <ul>
                    <li><a href="{{ route('services') }}">Développement Web</a></li>
                    <li><a href="{{ route('services') }}">Applications Mobiles</a></li>
                    <li><a href="{{ route('services') }}">Design UI/UX</a></li>
                    <li><a href="{{ route('services') }}">E-Commerce</a></li>
                    <li><a href="{{ route('services') }}">SEO</a></li>
                </ul>
            </div>

            <div class="footer-newsletter">
                <h4>Newsletter</h4>
                <p>Abonnez-vous pour recevoir nos dernières actualités et offres.</p>
                <form id="newsletterForm" class="newsletter-form">
                    <input type="email" id="newsletterEmail" name="email" placeholder="Votre email" required>
                    <button type="submit">S'abonner</button>
                </form>
                <p id="newsletterMsg" class="newsletter-msg"></p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© {{ date('Y') }} <span>CameleonLab</span>. Tous droits réservés.</p>
        </div>
    </div>
</footer>

<button class="scroll-top" aria-label="Retour en haut"><i class="fas fa-arrow-up"></i></button>

@push('scripts')
<script>
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    const msg = document.getElementById('newsletterMsg');

    fetch('/newsletter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            msg.textContent = 'Inscription réussie !';
            msg.style.color = '#2ECC71';
            this.reset();
        } else {
            msg.textContent = data.message || 'Email déjà inscrit.';
            msg.style.color = '#E74C3C';
        }
    })
    .catch(() => {
        msg.textContent = 'Merci ! Inscription enregistrée.';
        msg.style.color = '#2ECC71';
        this.reset();
    });
});
</script>
@endpush
