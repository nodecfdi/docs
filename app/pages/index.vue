<script setup lang="ts">
const { data: page } = await useAsyncData('index', async () => queryCollection('landing').path('/').first());
if (!page.value) {
  throw createError({ status: 404, message: 'Página no encontrada', fatal: true });
}

const title = page.value.seo.title || page.value.title;
const description = page.value.seo.description || page.value.description;

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://nodecfdi.com/img/nodecfdi_site_docs.png',
});
</script>

<template>
  <ContentRenderer
    :value="page!"
    :prose="false"
    :components="{ a: 'prose-a' }"
  />
</template>
