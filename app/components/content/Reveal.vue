<script setup lang="ts">
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 });

const el = ref<HTMLElement>();
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      visible.value = true;
      observer.disconnect();
    }
  }, { threshold: 0.15 });

  if (el.value) {
    observer.observe(el.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
