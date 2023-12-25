<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index() {
        $users = UserResource::collection(User::all());
        $roles = Role::all();
        return inertia('Dashboard/Users/Index', compact('users', 'roles'));
    }

    public function assign(User $user, Role $role) {
        $user->syncRoles($role);
        return back()->with('success', 'Role changed successfully');
    }
}
