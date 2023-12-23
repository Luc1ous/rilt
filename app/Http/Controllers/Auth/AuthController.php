<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignInRequest;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{

    public function redirectToProvider($provider) {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider) {
        $user = Socialite::driver($provider)->user();
        $checkUser = User::updateOrCreate(
            [
                'email' => $user->getEmail()
            ],
            [
                'name' => $user->getName(),
                'nickname' => $user->getNickname(),
                'avatar' => $user->getAvatar(),
                'provider_id' => $user->getId()
            ]
        );
        Auth::login($checkUser, true);
        return redirect()->route('home');
    }

    public function signin() {
        session()->put('prev_url', url()->previous());
        return inertia('Auth/SignIn');
    }

    public function authenticate(SignInRequest $request){
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

    public function register(SignUpRequest $request) {
        
        $user = User::create($request->validated());

        $prev_url = session()->pull('prev_url', 'default');

        Auth::login($user);
        return redirect()->to($prev_url);
    }

    public function logout() {
        Auth::logout();
        return back();
    }
}
