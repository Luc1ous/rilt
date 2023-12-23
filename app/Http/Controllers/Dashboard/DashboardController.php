<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $articles = Article::where('user_id', auth()->user()->id)->count();
        return inertia('Dashboard/Index', compact('articles'));
    }
}
