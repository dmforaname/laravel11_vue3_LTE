<?php

namespace App\Repositories\Api;

use App\Models\User;
use App\Repositories\BaseRepository;

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
}