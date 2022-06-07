<script setup lang="ts">
type Props = {
  direction?: "horizontal" | "vertical";
  class?: string;
};
const props = withDefaults(defineProps<Props>(), {
  direction: "horizontal",
});

const classes = computed(() => {
  return [
    {
      horizontal: props.direction === "horizontal",
      vertical: props.direction === "vertical",
    },
    props.class,
  ];
});
</script>

<template>
  <hr class="border-0 border-solid border-inherit" :class="classes" />
</template>

<style scoped>
.horizontal {
  @apply w-full border-b;
}

.vertical {
  @apply h-full border-r;
}
</style>
