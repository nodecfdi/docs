<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: {
    lang: 'es',
  },
});

useSeoMeta({
  title: 'Página no encontrada',
  description: 'Lo sentimos, pero no se pudo encontrar esta página.',
});

const { data: navigation } = await useAsyncData('navigation', async () => queryCollectionNavigation('docs'));
const { data: files } = useLazyAsyncData('search', async () => queryCollectionSearchSections('docs'), {
  server: false,
});

provide('navigation', navigation);
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
