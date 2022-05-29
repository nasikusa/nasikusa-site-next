<template><img v-bind="allProps" /></template>

<script lang="ts" setup>
type Props = {
  src: string;
};

const props = defineProps<Props>();

const allProps: any = props;
</script>
