<?php

namespace App\Observers;

class BlameableObserver
{
    public function creating(Model $model)
    {
        $model->created_by = Auth::user()->id ?? null;
        $model->updated_by = Auth::user()->id ?? null;
    }

    public function updating(Model $model)
    {
        $model->updated_by = Auth::user()->id ??  User::first()->id ?? NULL;
    }
}
