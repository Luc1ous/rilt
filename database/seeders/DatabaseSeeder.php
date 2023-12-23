<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = User::create([
            'name' => 'Ardian Ilyas',
            'nickname' => 'ardianilyas',
            'email' => 'ardian@rilt.com',
            'password' => bcrypt('developer')
        ]);

        $permission = Permission::create(['name' => 'do anything']);
        
        $superadmin = Role::create(['name' => 'Super Admin'])->givePermissionTo($permission);
        $admin = Role::create(['name' => 'Admin']);
        $writer = Role::create(['name' => 'Writer']);

        $user->assignRole($superadmin);

        Category::factory(5)->create();
        // Article::factory(20)->create();
    }
}
