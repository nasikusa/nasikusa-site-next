<script lang="ts" setup>
defineProps({
  type: String,
});
</script>

<template>
  <div
    class="app-button bg-orange-700 w-48 rounded-md p-2 text-white flex justify-center items-center hover:bg-orange-600 hover:cursor-pointer"
    :class="{
      hoge: type === 'primary',
    }"
  >
    <slot>button text</slot>
  </div>
</template>

<style scoped>
.hoge {
  @apply bg-orange-300 text-white;
}
</style>
