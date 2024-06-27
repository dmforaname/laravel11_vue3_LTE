<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/login', Api\Auth\LoginController::class);
Route::get('/refresh', Api\Auth\RefreshController::class);
Route::post('/logout', Api\Auth\LogoutController::class);