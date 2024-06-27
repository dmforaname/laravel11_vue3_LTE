<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', function () {
    return view('layouts.admin');
})->where('any', '.*');

Route::get('/admin/{any}', function () {
    return view('layouts.admin');
})->where('any', '.*');

Route::get('/login', function () {
    return view('layouts.login');
})->where('any', '.*');

Route::get('/loggedin', function () {
    return view('layouts.admin');
})->where('any', '.*');