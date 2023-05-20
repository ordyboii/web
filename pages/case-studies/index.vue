<script setup>
const { data: projects } = await useAsyncData(() =>
  queryContent("case-studies").find()
);

const { data: sides } = await useAsyncData(() => queryContent("sides").find());

useServerSeoMeta({
  title: "Case Studies",
});
</script>

<template>
  <section class="case-studies flow">
    <h1>Case Studies</h1>

    <div class="grid">
      <div class="flow">
        <h2>Client Work</h2>
        <ul class="flow">
          <li v-for="project in projects">
            <NuxtLink :to="project._path" class="card">
              <nuxt-picture
                :src="project.image"
                :alt="`${project.title} hero image`"
                width="1600"
                height="900"
              />
              <div class="flow">
                <h3>{{ project.title }}</h3>
                <p><strong>Client:</strong> {{ project.client }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flow">
        <h2>On The Side</h2>
        <ul class="flow">
          <li v-for="side in sides" class="card">
            <nuxt-picture
              :src="side.image"
              :alt="`${side.title} hero image`"
              width="1600"
              height="900"
            />
            <div class="flow">
              <h3>{{ side.title }}</h3>
              <ContentRenderer :value="side" />
              <a :href="side.link">View Project</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
