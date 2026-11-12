<script setup lang="ts">
const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData('navigation', async () => queryCollectionNavigation('docs'));
const { data: files } = useLazyAsyncData('search', async () => queryCollectionSearchSections('docs'), {
  server: false,
});

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'es',
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo.siteName}`,
  ogSiteName: seo.siteName,
});

provide('navigation', navigation);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
