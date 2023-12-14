<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet"> 
        @routes
        {{-- @viteReactRefresh --}}
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <style>
        body {
            font-family: 'DM Sans', sans-serif;
        }
    </style>
    <body class="antialiased">
        @inertia
    </body>
</html>
