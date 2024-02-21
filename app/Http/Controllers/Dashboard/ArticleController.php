<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\LaravelMarkdown\MarkdownRenderer;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::where('user_id', auth()->user()->id)->latest()->paginate(5);
        return inertia('Dashboard/Articles/Index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return inertia('Dashboard/Articles/Create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'thumbnail' => 'nullable|mimes:png,jpg,svg',
            'title' => 'required|min:10',
            'category_id' => 'required',
            'body' => 'required'
        ]);

        $thumbnail = $request->file('thumbnail');
        $thumbnailName = $thumbnail->hashName();
        $thumbnail->move('storage/articles', $thumbnailName);

        $data['body'] = app(MarkdownRenderer::class)
                        ->highlightTheme('github-dark')
                        ->toHtml($request->body);

        $data['thumbnail'] = $thumbnailName;
        $data['user_id'] = auth()->user()->id;

        Article::create($data);
        
        return redirect()->route('dashboard.articles.index')->with('success', 'Article created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        $categories = Category::all();
        return inertia('Dashboard/Articles/Edit', compact('article', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|min:10',
            'category_id' => 'required',
            'body' => 'required'
        ]);

        $article->slug = null;
        $article->update($request->all());

        return redirect()->route('dashboard.articles.index')->with('success', 'Article updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();
        return back()->with('success', 'Article deleted successfully');
    }
}
