<script setup>
import AspectRatio from "@/components/AspectRatio";
import Image from "@/components/Image";
import Text from "@/components/Text";
import Flex from "@/components/Flex";
</script>

<template>
  <Flex
    class="app-model-item bg-white flex-col max-w-sm rounded-lg border p-2 shadow-sm transition-all hover:cursor-pointer"
  >
    <div>
      <AspectRatio :ratio="16 / 9" class="rounded-lg">
        <Image src="/assets/image/ari17_1.jpg" />
      </AspectRatio>
    </div>
    <div class="pt-2">
      <Text class="font-bold text-md text-gray-600">wire_stage</Text>
    </div>
  </Flex>
</template>
