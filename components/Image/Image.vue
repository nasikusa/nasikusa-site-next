<script lang="ts" setup>
type Props = {
  src?: string;
  class?: string;
};

const props = defineProps<Props>();
</script>

<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>

<template>
  <img class="app-image" v-bind="props" v-on="$listeners" />
</template>
