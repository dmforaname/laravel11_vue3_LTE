<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Diaz Mahendra',
                'email' => 'dmforaname@gmail.com',
                'password' => bcrypt('password'),
            ],
        ];

        foreach ($data as $item) {

            User::firstOrCreate(
                ['email' => $item['email']],$item
            );
        }
    }
}
