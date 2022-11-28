<script setup lang="ts">
import MovieList from "../components/MovieList.vue";
const genres = ["Action", 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'History', 'Horror']
</script>
<template>
    <section class="flex flex-col gap-10 px-32 py-20">
        <div class="flex flex-col gap-4">
            <span class="bg-red-800 w-20 h-2"></span>
            <h2 class="text-3xl font-semibold text-white">
                Movies
            </h2>
        </div>
        <div class="flex flex-row gap-6">
            <div
                class="flex flex-col rounded-xl bg-gradient-to-b from-[#0E1723] to-[#1E232A]/0 w-2/5 text-white h-max ">
                <span class="text-lg font-semibold py-6 px-8 border-b border-[#FFFFFF]/10">Sort Result By</span>
                <div class="border-b border-[#FFFFFF]/10 flex flex-row">
                    <select class="py-2 px-8 m-4 w-full rounded bg-slate-500">
                        <option selected>
                            Popularity
                        </option>
                    </select>
                </div>
                <span class="text-lg font-semibold py-6 px-8 border-b border-[#FFFFFF]/10">Genres</span>
                <div class="py-6 flex flex-col">
                    <label v-for="genre, key in genres" :key="key" :for="genre"
                        class="flex flex-row space-between cursor-pointer w-full py-2 px-8 hover:bg-white/10 transition">
                        <span>
                            {{ genre }}
                        </span>
                        <input type="checkbox" :name="genre" :id="genre" class="ml-auto">
                    </label>
                </div>
            </div>
            <MovieList />
        </div>
    </section>
</template>