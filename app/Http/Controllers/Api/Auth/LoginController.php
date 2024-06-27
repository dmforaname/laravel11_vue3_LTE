<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ApiResponser;

class LoginController extends Controller
{
    use ApiResponser;

    public function __invoke(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        $token = Auth::guard('api')->attempt($credentials);
        
        if (!$token) return $this->error('Unauthorized',401);
    
        $remember_me = ($request->remember_me)? 30 : 2;

        // $user = User::where('email', $request->email)->first();

        return $this->success([
            'token' => $token,
            'token_ttl' => Carbon::now()->addHours(7)->addDay($remember_me)->timestamp * 1000,
            // 'keep_login' => ($request->remember_me) ? true : false
        ],'Login Successfully');
    }
}
