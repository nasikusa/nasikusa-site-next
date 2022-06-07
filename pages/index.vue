<script lang="ts" setup>
import AspectRatio from "~~/components/AspectRatio";
import Button from "~~/components/Button";
import Container from "~~/components/Container";

const { data: count, pending } = await useFetch<any>(
  "https://api.carbonintensity.org.uk/intensity"
);

useHead({
  title: "youkan note",
});

console.log(count.value);
</script>

<template>
  <Container>
    <div>
      <div class="bg-slate-600 p-5">aaaa</div>
      <Button>button</Button>
      {{ count.data[0].from }}

      <AspectRatio ratio="2" class="bg-orange-300">
        <img
          src="https://pbs.twimg.com/media/FT5AlhbakAAJSAr?format=jpg&name=small"
        />
      </AspectRatio>
      <NuxtLink to="/model"> Model page </NuxtLink>
    </div>
  </Container>
</template>
