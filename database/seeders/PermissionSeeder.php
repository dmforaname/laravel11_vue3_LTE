<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            ['name' => 'addUsers'],
            ['name' => 'viewUsers'],
        ];

        foreach ($permissions as $item) {

            Permission::firstOrCreate($item);
        }

        $role = Role::firstOrCreate(['name' => 'superAdmin']);

        foreach ($permissions as $item) {

            $role->givePermissionTo($item['name']);
        }
    }
}
