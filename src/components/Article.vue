<script setup lang="ts">
const movieDatas = [{
    "title": "Hills Run Red, The",
    "year": 1992,
    "rating": 3.3,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "Vulgar",
    "year": 1993,
    "rating": 8.2,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "The Man Who Lived Again",
    "year": 1994,
    "rating": 5.6,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Giant of Marathon, The (Battaglia di Maratona, La)",
    "year": 1995,
    "rating": 8.8,
    "image": "http://dummyimage.com/400x600.png/ff4444/ffffff"
}, {
    "title": "Mohabbatein",
    "year": 2000,
    "rating": 9.3,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Battle of amfAR, The",
    "year": 2010,
    "rating": 1.6,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "Wave, The",
    "year": 1986,
    "rating": 2.0,
    "image": "http://dummyimage.com/400x600.png/ff4444/ffffff"
}, {
    "title": "Leningrad Cowboys Go America",
    "year": 1999,
    "rating": 6.9,
    "image": "http://dummyimage.com/400x600.png/ff4444/ffffff"
}, {
    "title": "American Addict",
    "year": 1992,
    "rating": 6.1,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "Mighty Peking Man (a.k.a. Goliathon) (Xing xing wang)",
    "year": 2009,
    "rating": 5.6,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}]
</script>

<template>
    <section class="px-32 py-20 flex flex-col gap-10">
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-col gap-4">
                <span class="bg-red-800 w-3/4 h-2"></span>
                <h3 class="text-xl font-semibold text-white">
                    Discover Movies
                </h3>
            </div>
            <div class="flex flex-row gap-4">
                <button class="rounded-full px-6 py-2 h-max text-white bg-red-600">Popularity</button>
                <button class="rounded-full px-6 py-2 h-max text-white bg-zinc-700">Release Date</button>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-6">
            <div v-for="movie, key in movieDatas" :key="key" class="flex flex-col text-white relative cursor-pointer">
                <img :src="movie.image" alt="" class="h-96 object-cover mb-4">
                <span class="absolute top-0 right-0 bg-black/40 p-2 font-bold">{{ movie.rating }}</span>
                <span class="text-lg font-bold">{{ movie.title }}</span>
                <small class="text-sm text-gray-500">{{ movie.year }}</small>
            </div>
        </div>
    </section>
</template>