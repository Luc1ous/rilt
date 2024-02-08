<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class PublishedController extends Controller
{
    public function index() {
        $articles = Article::published()->paginate(5);
        return inertia('Dashboard/Published/Index', compact('articles'));
    }

    public function draft(Article $article) {
        $article->update(['status' => 'not published']);
        return back()->with('success', 'Article drafted successfully');
    }
}
