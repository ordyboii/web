<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(() =>
  queryContent("writing").where({ _path: route.path }).findOne()
);

useServerSeoMeta({
  title: post.value.title,
  description: post.value.summary,
  ogTitle: post.value.title,
  ogDescription: post.value.summary,
  ogImage: post.value.image,
});
</script>

<template>
  <section class="flow">
    <h1>{{ post.title }}</h1>
    <p>
      {{
        new Date(post.date).toLocaleDateString("en-gb", { dateStyle: "long" })
      }}
    </p>
    <hr aria-hidden="true" />
    <nuxt-picture
      :src="post.image"
      :alt="`${post.title} hero image`"
      width="1600"
      height="900"
      class="content-image"
    />
    <nav aria-label="Table of contents" class="toc flow">
      <h2>Table of contents</h2>
      <ul v-if="post.body.toc && post.body.toc.links">
        <li v-for="link in post.body.toc.links" :key="link.text">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
    <ContentRenderer class="flow" :value="post" />
  </section>
</template>
