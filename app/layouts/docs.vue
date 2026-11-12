<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { withoutTrailingSlash } from 'ufo';

const route = useRoute();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const PACKAGES_PATH = '/packages';

const packagesRoot = computed(() => navigation?.value.find((item) => item.path === PACKAGES_PATH));
const packageFolders = computed(() => (packagesRoot.value?.children ?? []).filter((item) => item.children?.length));

const currentPackage = computed(() => {
  const path = withoutTrailingSlash(route.path);

  return packageFolders.value.find((item) => path === item.path || path.startsWith(`${item.path}/`));
});

const mainNavigation = computed<ContentNavigationItem[]>(() => (navigation?.value ?? []).map((item) => {
  if (item.path !== PACKAGES_PATH) {
    return item;
  }

  return {
    ...item,
    children: (item.children ?? []).map((child) => child.children?.length
      ? { title: child.title, path: `${child.path}/getting-started`, icon: child.icon }
      : child),
  };
}));

const sidebarNavigation = computed(() => currentPackage.value?.children ?? mainNavigation.value);

const packageMenuItems = computed(() => [
  [{ label: 'Documentación', icon: 'i-tabler-arrow-left', to: '/getting-started' }],
  packageFolders.value.map((item) => ({
    label: item.title,
    icon: item.icon as string | undefined,
    to: `${item.path}/getting-started`,
    active: item.path === currentPackage.value?.path,
  })),
]);
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <template
            v-if="currentPackage"
            #top
          >
            <UDropdownMenu
              :items="packageMenuItems"
              :content="{ align: 'start' }"
            >
              <UButton
                :label="currentPackage.title"
                :icon="(currentPackage.icon as string | undefined)"
                trailing-icon="i-tabler-selector"
                color="neutral"
                variant="subtle"
                block
                class="justify-between"
              />
            </UDropdownMenu>
          </template>

          <UContentNavigation
            highlight
            :navigation="sidebarNavigation"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
