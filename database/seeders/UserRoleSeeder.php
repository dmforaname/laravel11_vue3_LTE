<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'email' => 'admin@example.com',
                'role' => 'superAdmin',
            ],
            // [
            //    'email' => 'user@example.com',
            //    'role' => 'user',
            //] 
        ];

        foreach ($data as $item){

            $user = User::where('email',$item['email'])->first();

            $roleToAssign = Role::findByName($item['role']);
            $user->assignRole($roleToAssign);
        }
    }
}
