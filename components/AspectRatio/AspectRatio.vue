<script lang="ts" setup>
type PropsType = {
  ratio: string;
  className: string;
};

defineProps<PropsType>();
</script>

<template>
  <div
    class="app-aspect-ratio overflow-hidden bg-slate-600"
    :class="className"
    :style="{ aspectRatio: ratio }"
  >
    <slot>aspect ratio component</slot>
  </div>
</template>

<style lang="scss" scoped>
.app-aspect-ratio {
  position: relative;

  > :not(style) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > img {
    object-fit: cover;
  }
}
</style>
