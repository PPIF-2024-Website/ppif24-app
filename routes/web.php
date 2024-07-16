<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
});

Route::get('/footer', function () {
    return Inertia::render('FooterPage');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/games', function() {
//     return Inertia::render('Test');
// });

Route::get('/gameLanding', function() {
    return Inertia::render('GameLanding');
});

Route::get('/background', function(){
    return Inertia::render('BackgroundTest');
});

Route::get('/TesGamePage', function() {
    return Inertia::render('TesGamePage');
});

Route::get('/Game', function() {
    return Inertia::render('GamePage');
});

require __DIR__.'/auth.php';
