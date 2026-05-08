import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            include: ['**/*.tsx', '**/*.jsx', '**/*.ts', '**/*.js'], // ← force l'inclusion
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        host: '0.0.0.0',
        allowedHosts: true,
        hmr: {
            host: 'localhost',
        },
    },
})