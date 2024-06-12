<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Main/Home');
    }

    public function articles(Request $request)
    {
        if($request->q) {
            $search = $request->q;
            $articles = Article::with('category')->where('title', 'like', "%{$search}%")->published()->latest()->paginate(9);
        } else {
            $articles = Article::with('category')->published()->latest()->paginate(9);
        }

        return inertia('Main/Articles', compact('articles'));
    }

    public function categories()
    {
        $categories = Category::latest()->get();
        return inertia('Main/Categories', compact('categories'));
    }

    public function showArticle(Article $article)
    {
        if ($article->status == 'published') {
            $article->load(['category', 'author']);
            return inertia('Main/Article', compact('article'));
        } else {
            abort(403);
        }
    }

    public function categoryDetail(Category $category)
    {
        $articles = Article::where('category_id', $category->id)->with('category')->latest()->paginate(9);
        return inertia('Main/CategoryDetail', compact('articles', 'category'));
    }
}
