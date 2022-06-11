<script setup>
import Container from "@/components/Container";
import Image from "@/components/Image";
import Divider from "@/components/Divider";
import Stack from "@/components/Stack";
import Center from "@/components/Center";
import Text from "@/components/Text";
import ModelItem from "@/components/ModelItem";
import Box from "@/components/Box";
import Flex from "@/components/Flex";

const piyo = () => console.log("hogepiyo");
</script>

<template>
  <Container>
    <Flex class="flex-wrap">
      <template v-for="n of 10" :key="n">
        <div class="p-2 w-1/2">
          <ModelItem />
        </div>
      </template>
    </Flex>
    <!-- <ModelItem /> -->
    <Box>box dayo</Box>
    hogehoge
    <div class="h-20 w-0">
      <Divider direction="vertical" class="border-yellow-500 my-5" />
    </div>
    <Image
      src="/assets/image/ari17_1.jpg"
      class="md:rounded-3xl rounded-none hover:shadow-lg transition-all duration-300"
      @load="piyo"
    />
    <Stack space="20px" direction="horizontal">
      <div>aaaa</div>
      <div>bbbbbb</div>
      <div>ccccc</div>
      <div>ddddd</div>
    </Stack>
    <Center class="w-40 h-40"> hogehoge </Center>
    <Text is="h2" class="font-bold text-xl" id="hogepiyo" @click="piyo"
      >hogehoge</Text
    >
  </Container>
</template>
