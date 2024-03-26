<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        collect(['Blog', 'Tutorial', 'Project'])->each(function ($cat) {
            \App\Models\Category::create([
                'name' => $cat,
                'slug' => str($cat)->slug(),
            ]);
        });

        collect(['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel', 'Vue', 'React', 'Tailwind', 'Bootstrap', 'Next JS', 'Nuxt JS'])->each(function ($tag) {
            \App\Models\Tag::create([
                'name' => $tag,
                'slug' => str($tag)->slug(),
            ]);
        });

        \App\Models\Article::factory(50)->create();
    }
}
