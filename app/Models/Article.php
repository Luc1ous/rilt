<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use function PHPUnit\Framework\returnSelf;

class Article extends Model
{
    use HasFactory, Sluggable;

    protected $guarded = ['id'];

    protected $casts = [
        'created_at' => 'datetime:l, d F Y',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function scopePublished(Builder $query) {
        $query->where('status', 'published');
    }

    public function scopeNotPublished(Builder $query) {
        $query->where('status', 'not published');
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'name', 'email', 'nickname');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id')->select('id', 'name', 'slug');
    }

    protected function thumbnail(): Attribute {
        return Attribute::make(
            get: fn($thumbnail) => asset('/storage/articles/'.$thumbnail)
        );
    }
}
