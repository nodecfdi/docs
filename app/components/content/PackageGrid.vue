<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const props = defineProps<{ category: string }>();

const navigation = inject<Ref<ContentNavigationItem[] | undefined>>('navigation');
const { data } = await useAsyncData('packages-data', async () => queryCollection('packages').first());

function findFirstPagePath(items: ContentNavigationItem[] | undefined, basePath: string): string {
  if (!items) {
    return basePath;
  }

  for (const item of items) {
    if (item.path === basePath) {
      let current = item;
      while (current.children?.length) {
        current = current.children[0]!;
      }

      return current.path;
    }

    if (item.children?.length && basePath.startsWith(`${item.path}/`)) {
      return findFirstPagePath(item.children, basePath);
    }
  }

  return basePath;
}

const packages = computed(() => (data.value?.packages ?? [])
  .filter((pkg) => pkg.category === props.category)
  .map((pkg) => ({
    ...pkg,
    to: pkg.docs ? findFirstPagePath(navigation?.value, `/packages/${pkg.name}`) : pkg.repo,
  })));
</script>

<template>
  <Reveal>
    <div class="flex flex-wrap justify-center gap-8">
      <UPageCard
        v-for="pkg in packages"
        :key="pkg.name"
        :title="pkg.title"
        :description="pkg.description"
        :icon="pkg.icon"
        :to="pkg.to"
        :target="pkg.docs ? undefined : '_blank'"
        spotlight
        class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
      >
        <template
          v-if="pkg.version"
          #footer
        >
          <UBadge
            :label="`v${pkg.version}`"
            variant="subtle"
            color="neutral"
          />
        </template>
      </UPageCard>
    </div>
  </Reveal>
</template>
