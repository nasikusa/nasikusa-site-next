<script setup lang="ts">
type Props = {
  direction?: "horizontal" | "vertical";
  space?: string;
};

const props = withDefaults(defineProps<Props>(), {
  direction: "vertical",
  space: "10px",
});

const classes = computed(() => {
  const isHorizontal = props.direction === "horizontal";
  const isVertical = props.direction === "vertical";

  const baseClasses = ["m-0"];

  if (isHorizontal) {
    return ["horizontal", "flex-row", ...baseClasses];
  } else if (isVertical) {
    return ["vertical", "flex-col", ...baseClasses];
  }
});
</script>

<template>
  <div class="app-stack flex" :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-stack.vertical > :not(style) ~ :not(style) {
  margin-top: v-bind("props.space");
}

.app-stack.horizontal > :not(style) ~ :not(style) {
  margin-left: v-bind("props.space");
}
</style>
