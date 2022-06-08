<script lang="ts" setup>
type Props = {
  src?: string;
  class?: string;
};

const props = defineProps<Props>();
</script>

<template><img class="app-image" :class="class" :src="src" /></template>
