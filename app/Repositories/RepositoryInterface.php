<?php

namespace App\Repositories;

/**
 * Interface RepositoryInterface
 *
 * @package App\Repositories
 */
interface RepositoryInterface
{
    /**
     * @param  array  $attributes
     *
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * @param  int  $id
     *
     * @return mixed
     */
    public function getById(int $id);
}