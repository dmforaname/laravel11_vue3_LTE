<?php

namespace App\Http\Resources\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->uuid,
            'name' => $this->name,
            'email' => $this->email,
            'roles' =>  collect($this->roles)->pluck('name'),
            'permissions' => collect(collect($this->roles)->pluck('permissions'))->flatten()->pluck('name'),
        ];
    }
}
