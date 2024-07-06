<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupNameController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/auth', [GroupNameController::class, 'getAuth']);
Route::get('/group', [GroupNameController::class, 'getGroupName']);