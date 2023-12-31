<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        return inertia('Main/Home');
    }

    public function articles() {
        $articles = Article::with('category')->latest()->paginate(9);
        return inertia('Main/Articles', compact('articles'));
    }

    public function categories() {
        $categories = Category::latest()->get();
        return inertia('Main/Categories', compact('categories'));
    }

    public function showArticle(Article $article) {
        $article->load(['category', 'author']);
        return inertia('Main/Article', compact('article'));
    }

    public function categoryDetail(Category $category) {
        $articles = Article::where('category_id', $category->id)->with('category')->latest()->paginate(9);
        return inertia('Main/CategoryDetail', compact('articles', 'category'));
    }
}
