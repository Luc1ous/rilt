<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'fullname' => 'Ardian Ilyas',
            'username' => 'lucious',
            'email' => 'ardian@rilt.com',
            'password' => bcrypt('developer'),
        ]);
        Category::factory(5)->create();
        // Article::factory(20)->create();
    }
}
