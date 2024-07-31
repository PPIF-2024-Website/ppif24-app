<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\File;

class GroupNameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Uncomment and modify this part if needed for testing
        // DB::table('group_names')->insert([
        //     [
        //         'unique_code' => Str::random(10),
        //         'group_name' => "Group 1",
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        // ]);

        $json = File::get(database_path('seeders/riddlesData/riddles.json'));
        $riddles = json_decode($json, true);

        $riddleCount = count($riddles);
        $data = [];  // Initialize $data array

        for ($i = 0; $i < 20; $i++) {
            $data[] = [
                'secret_code' => Str::random(10),
                'token' => Str::random(10),
                'decode_message' => $faker->word,
                'group_name' => $faker->word,
                'riddle' => $riddles[$i % $riddleCount],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('group_names')->insert($data);
    }
}
