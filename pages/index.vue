<script lang="ts" setup>
const { data: count } = await useFetch(
  "https://www.stevensegallery.com/300/300"
);

console.log(count);
</script>

<template>
  <div>
    <div class="bg-slate-600 p-5">aaaa</div>
    <NuxtLink to="/model"> Model page </NuxtLink>
  </div>
</template>
