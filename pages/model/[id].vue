<template>
  <Container>
    id!
    <Image src="/assets/image/ari17_1.jpg" />
  </Container>
</template>

<script setup>
import Container from "@/components/Container";
import Image from "@/components/Image";

const route = useRoute();

console.log(route.params.id);
</script>
