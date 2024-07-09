<?php

namespace App\Repositories;

/**
 * Class BaseRepository
 *
 * @package App\Repositories
 */
class BaseRepository implements RepositoryInterface
{
    /**
     * BaseRepository constructor.
     *
     * @param  object  $model
     */
    public function __construct(private object $model)
    {
        //
    }

    /**
     * Return model
     *
     * @return object
     */
    public function model(): object
    {
        return $this->model;
    }

    /**
     * Create entry
     *
     * @param  array  $attributes
     *
     * @return mixed
     */
    public function create(array $attributes)
    {
        return $this->model()->create($attributes);
    }

    /**
     * @param  int  $id
     *
     * @return mixed
     */
    public function getById(int $id)
    {
        return $this->model->find($id);
    }
}