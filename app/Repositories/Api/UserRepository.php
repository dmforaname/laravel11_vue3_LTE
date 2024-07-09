<?php

namespace App\Repositories\Api;

use App\Models\User;
use App\Repositories\BaseRepository;
use Spatie\Permission\Models\Role;

/**
 * Class UserRepository
 *
 * @package App\Repositories\Admin
 */
class UserRepository extends BaseRepository
{
    /**
     * UserRepository constructor.
     *
     * @param  User  $model
     */
    public function __construct(public User $model)
    {
        parent::__construct($model);
    }

    public function setUserRole($request,$data)
    {
        $user = $this->model->find($data->id);
        $roleToAssign = Role::findByName($request->role);
        $user->assignRole($roleToAssign);

        return $user;
    }
}