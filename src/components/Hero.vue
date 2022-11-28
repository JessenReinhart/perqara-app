<script setup lang="ts">
import { Icon } from '@iconify/vue';

const movies = [{
    image: "https://www.showbizjunkies.com/wp-content/uploads/2020/10/news-of-the-world-poster.jpg",
    isMain: false,
    rating: 7.2,
    title: "News of the World",
    year: "2021",
    genre: "Drama",
    description: `A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped.`
}, {
    image: "https://image.tmdb.org/t/p/original/y2Yp7KC2FJSsdlRM5qkkIwQGCqU.jpg",
    isMain: true,
    rating: 7.3,
    title: "Space Sweepers",
    year: "2021",
    genre: "Sci-Fi",
    description: `When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.`
}, {
    image: "https://media2.firstshowing.net/firstshowing/img11/toalltheboysALwaysforeverfinpost593.jpg",
    isMain: false,
    rating: 8.1,
    title: `To All the Boys: Always and Forever`,
    year: "2021",
    genre: "Drama",
    description: `Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.`
}]
</script>

<template>
    <section class="bg-zinc-900 w-full py-24 flex flex-col justify-center items-center">
        <div class="flex-row gap-9 flex">
            <div v-for="movie, key in movies" :key="key"
                class="h-96 flex flex-row items-center hover:-translate-y-2 hover:scale-105 transition cursor-pointer"
                :class="movie.isMain ? '' : 'opacity-40 hover:opacity-100'">
                <img :src="movie.image" alt="" class="h-full w-60 object-cover">
                <div class="bg-black max-w-xs h-[324px] py-6 px-6 flex flex-col text-white gap-3">
                    <span class="font-bold flex flex-row gap-2 items-center">
                        <Icon icon="material-symbols:star" class="text-yellow-500 mb-1" />{{ movie.rating }}
                    </span>
                    <h2 class="text-3xl">{{ movie.title }}</h2>
                    <span class="text-sm">
                        {{ movie.year }} - {{ movie.genre }}
                    </span>
                    <p class="text-xs leading-relaxed overflow-y-auto">{{ movie.description }}</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 mt-16">
            <span class="bg-red-800 h-3 w-16 rounded-full"></span>
            <span class="bg-white opacity-50 h-3 w-3 rounded-full"></span>
            <span class="bg-white opacity-50 h-3 w-3 rounded-full"></span>
            <span class="bg-white opacity-50 h-3 w-3 rounded-full"></span>
        </div>
    </section>
</template>