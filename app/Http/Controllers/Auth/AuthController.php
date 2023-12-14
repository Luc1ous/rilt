<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class AuthController extends Controller
{

    public function signin() {
        session()->put('prev_url', url()->previous());
        return inertia('Auth/SignIn');
    }

    public function authenticate(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        $prev_url = session()->pull('prev_url', 'default');

        if(Auth::attempt($request->all())) {
            $request->session()->regenerate();
            return redirect()->to($prev_url);
        } else {
            return redirect()->back()->withErrors(['email' => "This credentials doesn't match our record"]);
        }
    }

    public function signup() {
        session()->put('prev_url', url()->previous());
        return inertia('Auth/SignUp');
    }

    public function register(Request $request) {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'fullname' => 'required|string|min:2',
            'username' => 'required|min:5|unique:users,username',
            'password' => 'required|min:8'
        ]);

        $user = User::create([
            'email' => $request->email,
            'username' => $request->username,
            'fullname' => $request->fullname,
            'password' => $request->password
        ]);

        $prev_url = session()->pull('prev_url', 'default');

        Auth::login($user);
        return redirect()->to($prev_url);
    }

    public function logout() {
        Auth::logout();
        return back();
    }
}
