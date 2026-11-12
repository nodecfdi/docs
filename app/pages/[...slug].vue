<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { findPageHeadline } from '@nuxt/content/utils';
import { withoutTrailingSlash } from 'ufo';

definePageMeta({
  layout: 'docs',
});

const route = useRoute();
const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');
const routePath = computed(() => withoutTrailingSlash(route.path));

const { data: page } = await useAsyncData(() => routePath.value, async () => queryCollection('docs').path(routePath.value).first(), { watch: [routePath] });
if (!page.value) {
  // Folders without an index page (e.g. /packages/<name>/getting-started) redirect to their first page.
  const findFolder = (items: ContentNavigationItem[] = []): ContentNavigationItem | undefined => {
    for (const item of items) {
      if (item.path === routePath.value) {
        return item;
      }
      const found = findFolder(item.children);
      if (found) {
        return found;
      }
    }

    return undefined;
  };
  const findFirstLeaf = (item?: ContentNavigationItem): string | undefined => {
    const first = item?.children?.[0];

    return first ? (first.children?.length ? findFirstLeaf(first) : first.path) : undefined;
  };
  const target = findFirstLeaf(findFolder(navigation?.value));
  if (target) {
    await navigateTo(target, { redirectCode: 302, replace: true });
  } else {
    throw createError({ status: 404, message: 'Página no encontrada', fatal: true });
  }
}

const { data: surround } = await useAsyncData(() => `${routePath.value}-surround`, async () => {
  return queryCollectionItemSurroundings('docs', routePath.value, {
    fields: ['description'],
  });
}, { watch: [routePath] });

const title = computed(() => page.value?.seo.title || page.value?.title);
const description = computed(() => page.value?.seo.description || page.value?.description);

useSeoMeta({
  title: () => title.value,
  ogTitle: () => title.value,
  description: () => description.value,
  ogDescription: () => description.value,
});

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path));

// eslint-disable-next-line vue/no-ref-object-reactivity-loss
defineOgImage('Docs', { title, description, headline: headline.value });

const { data: packagesData } = await useAsyncData('packages-data', async () => queryCollection('packages').first());
const currentPackage = computed(() => {
  const name = (/^\/packages\/([^/]+)/.exec(routePath.value))?.[1];

  return packagesData.value?.packages.find((item) => item.name === name);
});

const links = computed(() => {
  const links = [];
  if (toc.bottom.edit) {
    links.push({
      icon: 'i-lucide-external-link',
      label: 'Editar esta página',
      to: `${toc.bottom.edit}/${page.value?.stem}.${page.value?.extension}`,
      target: '_blank',
    });
  }

  if (currentPackage.value?.repo) {
    links.push({
      icon: 'i-tabler-brand-github',
      label: `${currentPackage.value.title} - Repositorio`,
      to: currentPackage.value.repo,
      target: '_blank',
    });
  }

  return [...links, ...toc.bottom.links].filter(Boolean);
});
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page!.title"
      :description="page!.description"
      :headline="headline"
    >
      <template #links>
        <PageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        :value="page!"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="links.length"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page?.body?.toc?.links"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
          <div
            class="hidden lg:block space-y-6"
            :class="{ 'mt-6!': page?.body?.toc?.links?.length }"
          >
            <USeparator
              v-if="page?.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              :title="toc.bottom.title"
              :links="links"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>

  <div v-else />
</template>
