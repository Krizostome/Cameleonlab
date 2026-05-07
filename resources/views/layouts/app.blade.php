<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'CameleonLab')</title>
    <link rel="icon" type="image/jpeg" href="{{ asset('assets/images/cameleonlab.jpeg') }}">
    <link rel="apple-touch-icon" href="{{ asset('assets/images/cameleonlab.jpeg') }}">

    <!-- Fonts & Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans&family=JetBrains+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    
    @stack('styles')
</head>
<body>

@include('partials.navbar')

<main>
    @yield('content')
</main>

@include('partials.footer')

<script src="{{ asset('assets/js/main.js') }}"></script>

@stack('scripts')

</body>
</html>
