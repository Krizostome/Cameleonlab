# CameleonLab - Site Vitrine

Site vitrine pour CameleonLab, agence de conception et développement web.

## Installation

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

## Configuration Email

Dans `.env`, configurez vos identifiants SMTP :

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=votre_email@gmail.com
MAIL_PASSWORD=votre_mot_de_passe_application
MAIL_FROM_ADDRESS="votre_email@gmail.com"
MAIL_FROM_NAME="CameleonLab"
```

## Lancement

```bash
php artisan serve
```

Accédez à `http://localhost:8000`

## Structure

```
├── app/Http/Controllers/     # ContactController
├── app/Mail/                 # ContactMail
├── resources/views/
│   ├── layouts/app.blade.php # Layout principal
│   ├── partials/             # Navbar, Footer
│   ├── pages/                # Pages (home, apropos, services, projets, contact)
│   └── emails/               # Template email de contact
├── public/assets/            # CSS, JS, images
└── routes/web.php            # Routes
```

## Fonctionnalités

- **Site statique** - Aucune base de données requise
- **Formulaire de contact** - Envoi d'email via SMTP Laravel
- **Newsletter** - Emails sauvegardés dans `storage/app/newsletter.txt`
- **Responsive** - Adapté à tous les écrans
- **Animations** - Scroll animations, hero text cycling, compteurs
