<template>
  <div
    class="max-w-xs rounded-md bg-slate-400 p-2 text-white"
    :class="{
      hoge: type === 'primary',
    }"
  >
    <slot>button text</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  type: String,
});
</script>

<style scoped>
.hoge {
  @apply bg-orange-300 text-white;
}
</style>
