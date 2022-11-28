<script setup lang="ts">
const movieDatas = [{
    "title": "Night Gallery",
    "year": 1997,
    "rating": 7.0,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Man with the Movie Camera, The (Chelovek s kino-apparatom)",
    "year": 1995,
    "rating": 5.5,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Scorpion King 2: Rise of a Warrior, The",
    "year": 2002,
    "rating": 4.3,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Alice in Wonderland",
    "year": 1997,
    "rating": 9.9,
    "image": "http://dummyimage.com/400x600.png/ff4444/ffffff"
}, {
    "title": "Wild Heritage",
    "year": 2001,
    "rating": 1.4,
    "image": "http://dummyimage.com/400x600.png/cc0000/ffffff"
}, {
    "title": "Spy Kids",
    "year": 2007,
    "rating": 3.3,
    "image": "http://dummyimage.com/400x600.png/5fa2dd/ffffff"
}, {
    "title": "Wyoming Renegades",
    "year": 2008,
    "rating": 3.8,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "The Real Glory",
    "year": 1993,
    "rating": 9.1,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "Interview",
    "year": 2011,
    "rating": 9.9,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}, {
    "title": "In the Shadow of the Machine",
    "year": 2009,
    "rating": 2.9,
    "image": "http://dummyimage.com/400x600.png/ff4444/ffffff"
}, {
    "title": "Parting Glances",
    "year": 2012,
    "rating": 3.5,
    "image": "http://dummyimage.com/400x600.png/5fa2dd/ffffff"
}, {
    "title": "Four Days in September (O Que É Isso, Companheiro?)",
    "year": 1999,
    "rating": 5.4,
    "image": "http://dummyimage.com/400x600.png/dddddd/000000"
}]

</script>

<template>
    <div class="grid grid-cols-4 gap-6">
        <div v-for="movie, key in movieDatas" :key="key" class="flex flex-col text-white relative cursor-pointer">
            <img :src="movie.image" alt="" class="h-96 object-cover mb-4">
            <span class="absolute top-0 right-0 bg-black/40 p-2 font-bold">{{ movie.rating }}</span>
            <span class="text-lg font-bold">{{ movie.title }}</span>
            <small class="text-sm text-gray-500">{{ movie.year }}</small>
        </div>
    </div>
</template>