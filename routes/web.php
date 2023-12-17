<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\ArticleController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\HomeController;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/articles', [HomeController::class, 'articles']);
Route::get('/articles/{article}', [HomeController::class, 'showArticle']);
Route::get('/categories', [HomeController::class, 'categories']);
Route::get('/categories/{category}', [HomeController::class, 'categoryDetail']);

// Route auth
Route::middleware('guest')->group(function() {
    Route::get('/signin', [AuthController::class, 'signin'])->name('login');
    Route::post('/signin', [AuthController::class, 'authenticate']);
    Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
    Route::post('/signup', [AuthController::class, 'register']);
});

// Route login and profile
Route::middleware('auth')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', function() {
        return inertia("Main/Profile");
    });
});

// Route Dashboard [Superadmin, Admin, Writer]
Route::middleware(['auth'])->prefix('dashboard')->name('dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::resource('articles', ArticleController::class);
});

// Route::get('/user/{user}', function(User $user) {
//     dd($user->only('id', 'username', 'fullname'));
// });
