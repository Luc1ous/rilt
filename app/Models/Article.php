<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    protected $casts = [
        'created_at' => 'datetime:l, d F Y',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopePublished(Builder $query) {
        $query->where('status', 'published');
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'username', 'email');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id')->select('id', 'name', 'slug');
    }
}
