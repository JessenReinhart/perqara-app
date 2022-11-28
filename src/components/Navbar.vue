<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <header
    class="w-screen bg-zinc-800/80 h-[66px] flex flex-row px-[120px] sticky top-0 left-0 z-50 shadow-sm backdrop-blur">
    <img src="../assets/logo.png" alt="" class="h-[31px] my-auto" />
    <input type="text" list="movielist" name="movielist" id="movielist" placeholder="Find Movie"
      class="rounded bg-zinc-900 text-white px-4 py-2 my-auto w-1/3 ml-9">
    <datalist id="movielist">
      <option value="Wonder Woman">Wonder Woman</option>
      <option value="Wonder Woman 1984">Wonder Woman 1984</option>
      <option value="Wonder Woman: Bloodlines">Wonder Woman: Bloodlines</option>
      <option value="Wonder Boys">Wonder Boys</option>
      <option value="Wonder Park">Wonder Park</option>
    </datalist>
    <nav class="flex flex-row gap-9 items-center text-white font-semibold ml-auto">
      <a href="#" class="uppercase flex flex-row items-center gap-2">
        <Icon icon="ic:round-grid-view" /> categories
      </a>
      <a href="#" class="uppercase">movies</a>
      <a href="#" class="uppercase">tv shows</a>
      <a href="#" class="uppercase">login</a>
    </nav>
  </header>
</template>