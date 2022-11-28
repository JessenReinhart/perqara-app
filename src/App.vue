<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <footer class="bg-zinc-900 h-[160px] px-32 flex flex-row text-sm text-gray-500 items-center w-full">
    <span>© 2021 MoovieTime. All rights reserved.</span>
    <img src="./assets/logo-grey.png" alt="" class="h-[24px] mx-auto">
    <span>Made with VueJS</span>
  </footer>
</template>