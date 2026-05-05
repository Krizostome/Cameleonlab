<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/', fn() => view('pages.home'))->name('home');
Route::get('/apropos', fn() => view('pages.apropos'))->name('apropos');
Route::get('/services', fn() => view('pages.services'))->name('services');
Route::get('/projets', fn() => view('pages.projets'))->name('projets');
Route::get('/contact', fn() => view('pages.contact'))->name('contact');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

Route::post('/newsletter', function (\Illuminate\Http\Request $request) {
    $request->validate(['email' => 'required|email']);

    $emails = storage_path('app/newsletter.txt');
    if (file_exists($emails) && strpos(file_get_contents($emails), $request->email) !== false) {
        return response()->json(['message' => 'Email déjà inscrit.'], 400);
    }

    file_put_contents($emails, $request->email . PHP_EOL, FILE_APPEND | LOCK_EX);

    return response()->json(['success' => true]);
});
