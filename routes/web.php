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

Route::get('/timeline', function () {
    return Inertia::render('TimelinePage');
});
    
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('game')->group(function () {
    Route::get('/story', function () {
        return Inertia::render('GameStoryPage');
    });
    Route::get('/archive', function () {
        return Inertia::render('GameArchivesPage');
    
    });
});

Route::get('/background', function(){
    return Inertia::render('BackgroundTest');
});

require __DIR__.'/auth.php';
