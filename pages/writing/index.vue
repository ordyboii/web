<script setup>
const { data: posts } = await useAsyncData(() =>
  queryContent("writing").find()
);

useServerSeoMeta({
  title: "Writing",
});
</script>

<template>
  <section class="writing flow">
    <h1>Writing</h1>
    <ul class="flow">
      <li v-for="post in posts">
        <NuxtLink :to="post._path" class="flow">
          <h3>{{ post.title }}</h3>
          <p>
            {{
              new Date(post.date).toLocaleDateString("en-gb", {
                dateStyle: "long",
              })
            }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
