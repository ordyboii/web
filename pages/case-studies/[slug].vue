<script setup>
const route = useRoute();
const { data: project } = await useAsyncData(() =>
  queryContent("case-studies").where({ _path: route.path }).findOne()
);

useServerSeoMeta({
  title: project.value.title,
  description: project.value.summary,
  ogTitle: project.value.title,
  ogDescription: project.value.summary,
  ogImage: project.value.image,
});
</script>

<template>
  <section class="flow">
    <h1>{{ project.title }}</h1>
    <p>{{ project.client }}</p>
    <hr aria-hidden="true" />
    <nuxt-picture
      :src="project.image"
      :alt="`${project.title} hero image`"
      width="1600"
      height="900"
      class="content-image"
    />
    <nav aria-label="Table of contents" class="toc flow">
      <h2>Table of contents</h2>
      <ul v-if="project.body.toc && project.body.toc.links">
        <li v-for="link in project.body.toc.links" :key="link.text">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
    <ContentRenderer class="flow" :value="project" />
  </section>
</template>
