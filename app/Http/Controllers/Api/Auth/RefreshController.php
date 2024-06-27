<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RefreshController extends Controller
{
    use ApiResponser;
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke() {

        return $this->success([
            'token' => Auth::guard('api')->refresh(),
        ],'Token Refresh Successfully');
    }
}
