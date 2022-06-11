<script lang="ts" setup>
type Props = {
  is?: string;
};

const props = defineProps<Props>();
</script>

<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>

<template>
  <component
    :is="props.is || 'span'"
    class="app-text"
    v-bind="props"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
