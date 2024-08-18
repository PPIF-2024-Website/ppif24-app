<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class GroupNameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('seeders/group_datas.json'));
        $groupDatas = json_decode($json, true);

        foreach ($groupDatas as $item) {
            DB::table('group_names')->insert([
                'secret_code' => $item['secret_code'],
                'token' => Str::random(16),
                'decode_message' => $item['decode_message'],
                'group_name' => $item['group_name'],
                'riddle' => $item['riddle']
            ]);
        }

    }
}
