<script setup lang="ts">
import MovieList from "../components/MovieList.vue";
</script>
<template>
    <section class="flex flex-col gap-10 px-32 py-20">
        <div class="flex flex-col gap-4">
            <span class="bg-red-800 w-20 h-2"></span>
            <h2 class="text-3xl font-semibold text-white">
                Movies
            </h2>
        </div>
        <div class="flex flex-row gap-4 ">
            <div class="flex flex-col rounded-xl bg-slate-700 w-2/5 text-white">
                <span class="text-lg font-bold p-10 border-b border-slate-600">Sort Result By</span>
            </div>
            <MovieList />
        </div>
    </section>
</template>