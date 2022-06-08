<script setup lang="ts">
import Image from "@/components/Image";

const props = defineProps({
  title: String,
  type: String,
  id: Number,
});
</script>

<template>
  <div>
    <div>
      {{ title }}
    </div>
    <div>
      <Image src="" />
    </div>
  </div>
</template>
