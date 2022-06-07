<script lang="ts" setup>
type PropsType = {
  ratio: string;
  class: string;
};

defineProps<PropsType>();

const slots = useSlots();

console.log(slots.default);
</script>

<template>
  <div
    class="app-aspect-ratio overflow-hidden"
    :class="class"
    :style="{ aspectRatio: ratio }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.app-aspect-ratio {
  position: relative;
}

.app-aspect-ratio > ::v-deep(img) {
  object-fit: cover;
}

.app-aspect-ratio > :not(style) {
  overflow: hidden;
  width: 100%;
  height: 100%;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
