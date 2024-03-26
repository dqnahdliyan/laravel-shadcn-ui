<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'category_id' => rand(1, 3),
            'title' => $title = fake()->sentence(),
            'slug' => str($title)->slug(),
            'teaser' => fake()->sentence(),
            'body' => fake()->sentence(),
        ];
    }
}
