<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class DraftController extends Controller
{
    public function index()
    {
        $articles = Article::with('author')->notPublished()->paginate(5);
        return inertia('Dashboard/Draft/Index', compact('articles'));
    }

    public function publish(Article $article) {
        $article->update([ 'status' => 'published' ]);
        return redirect()->to('/dashboard/draft')->with('success', 'Article published successfully');
    }
}
