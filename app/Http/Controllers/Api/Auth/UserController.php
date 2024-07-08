<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Auth\UserResource;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use ApiResponser;

    public function __invoke()
    {
        $user = Auth::user();
        // $user->getRoleNames();
        $user->getPermissionsViaRoles();
        $data = [
            'user' => UserResource::make($user)
        ];

        return $this->success($data, 'Successfully get user data');
    }
}
