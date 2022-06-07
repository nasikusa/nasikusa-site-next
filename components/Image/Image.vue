<template><img class="class" :src="src" /></template>

<script lang="ts" setup>
type Props = {
  src: string;
  class: string;
};

const props = defineProps<Props>();
</script>
