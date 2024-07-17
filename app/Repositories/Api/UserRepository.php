<?php

namespace App\Repositories\Api;

use App\Models\User;
use App\Repositories\BaseRepository;
use Spatie\Permission\Models\Role;
use DataTables;

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

    public function getUserWithRole()
    {
        return $this->model->with('roles')->latest()->get()
            ->makeHidden(['id','created_at','updated_at','email_verified_at']);
    }

    public function getDatatableList()
    {
        return Datatables::of(self::getUserWithRole())
            ->addIndexColumn()
            ->addColumn('roles', function($data) {

                return $data->roles->first()->name;
            })
            ->setRowClass(function ($data) {
                return "clickRow";
            })
            ->make(true);
    }
}