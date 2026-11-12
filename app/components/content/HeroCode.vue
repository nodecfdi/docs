<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { data } = await useAsyncData('packages-data', async () => queryCollection('packages').first());

const featuredPackages = computed(() =>
  (data.value?.packages ?? []).filter((pkg) => pkg.featured),
);

const activeIndex = ref(0);
const activePkg = computed(() => featuredPackages.value[activeIndex.value] ?? featuredPackages.value[0]);

const typedText = ref('');
const visibleSteps = ref(0);
const isTyping = ref(true);

const fullCommand = computed(() => (activePkg.value ? `pnpm add @eienjs/${activePkg.value.name}` : ''));

const { copy, copied } = useClipboard();

const timers: ReturnType<typeof setTimeout>[] = [];

function clearTimers() {
  while (timers.length > 0) {
    const id = timers.pop();
    if (id !== undefined) {
      clearTimeout(id);
    }
  }
}

function schedule(fn: () => void, ms: number) {
  const id = setTimeout(fn, ms);
  timers.push(id);
}

function runSequence() {
  clearTimers();
  const cmd = fullCommand.value;
  if (!cmd) {
    return;
  }

  typedText.value = '';
  visibleSteps.value = 0;
  isTyping.value = true;

  let charIndex = 0;

  const typeNext = () => {
    if (charIndex < cmd.length) {
      charIndex += 1;
      typedText.value = cmd.slice(0, charIndex);
      schedule(typeNext, 28);

      return;
    }

    isTyping.value = false;

    schedule(() => {
      visibleSteps.value = 1;
    }, 220);

    schedule(() => {
      visibleSteps.value = 2;
    }, 550);

    schedule(() => {
      if (featuredPackages.value.length > 1) {
        activeIndex.value = (activeIndex.value + 1) % featuredPackages.value.length;
      }
    }, 2500);
  };

  schedule(typeNext, 200);
}

function selectPackage(index: number) {
  if (activeIndex.value === index) {
    runSequence();

    return;
  }

  activeIndex.value = index;
}

watch(activeIndex, () => {
  runSequence();
});

onMounted(() => {
  if (featuredPackages.value.length > 0) {
    typedText.value = fullCommand.value;
    visibleSteps.value = 2;
    isTyping.value = false;
    runSequence();
  }
});

onBeforeUnmount(() => {
  clearTimers();
});
</script>

<template>
  <div class="min-w-0">
    <div
      v-if="activePkg"
      class="flex min-w-0 flex-col gap-2 rounded-xl bg-elevated/50 px-2.5 py-2 ring ring-default backdrop-blur-xs"
    >
      <!-- Terminal window header -->
      <div class="flex items-center justify-between ps-2 pe-1 pt-0.5">
        <div class="flex items-center gap-2">
          <span class="size-2.5 rounded-full bg-error/75" />
          <span class="size-2.5 rounded-full bg-warning/75" />
          <span class="size-2.5 rounded-full bg-success/75" />
          <span class="ms-2 flex items-center gap-1.5 font-mono text-xs text-muted">
            <UIcon
              name="i-tabler-terminal-2"
              class="size-3.5 text-primary"
            />
            terminal
          </span>
        </div>

        <UButton
          :icon="copied ? 'i-tabler-copy-check' : 'i-tabler-copy'"
          color="neutral"
          variant="ghost"
          size="xs"
          :aria-label="`Copy ${fullCommand}`"
          @click="copy(fullCommand)"
        />
      </div>

      <!-- Fixed height terminal viewport -->
      <div class="flex h-56 flex-col justify-between rounded-lg bg-default/70 p-4 font-mono text-xs/6 shadow-sm sm:text-sm/6">
        <div class="space-y-2 overflow-hidden">
          <!-- Command prompt line -->
          <div class="flex items-center gap-2 whitespace-nowrap">
            <span class="select-none font-bold text-primary">❯</span>
            <span class="text-highlighted">{{ typedText }}</span>
            <span
              class="inline-block h-4 w-1.5 bg-primary align-middle"
              :class="isTyping ? 'opacity-100' : 'animate-pulse'"
            />
          </div>

          <!-- Simulated Ace output -->
          <div class="space-y-1 pt-1 text-xs/5">
            <div
              class="flex items-center gap-2 transition-all duration-200"
              :class="visibleSteps >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'"
            >
              <span class="text-success">✔</span>
              <span class="text-muted">Installed</span>
              <span class="font-medium text-default">@nodecfdi/{{ activePkg.name }}</span>
              <span
                v-if="activePkg.version"
                class="text-dimmed"
              >v{{ activePkg.version }}</span>
            </div>
            <div
              class="flex items-center gap-2 pt-1 transition-all duration-200"
              :class="visibleSteps >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'"
            >
              <span class="rounded bg-primary/15 px-1.5 py-0.5 text-[11px] font-semibold text-primary">DONE</span>
              <span class="text-default">Package configured successfully</span>
            </div>
          </div>
        </div>

        <!-- Active package description footer inside terminal -->
        <div class="flex items-center justify-between gap-2 border-t border-default/60 pt-2.5 font-sans text-xs text-muted">
          <span class="truncate">{{ activePkg.description }}</span>
          <UBadge
            v-if="activePkg.version"
            :label="`v${activePkg.version}`"
            variant="subtle"
            color="primary"
            size="sm"
            class="shrink-0"
          />
        </div>
      </div>

      <!-- Featured packages switcher bar -->
      <div class="flex items-center justify-between gap-2 px-1 pb-0.5 pt-1">
        <div class="flex items-center gap-1.5">
          <UTooltip
            v-for="(pkg, idx) in featuredPackages"
            :key="pkg.name"
            :text="pkg.title"
          >
            <button
              type="button"
              :aria-label="pkg.title"
              :aria-pressed="activeIndex === idx"
              class="flex size-8 items-center justify-center rounded-full transition"
              :class="activeIndex === idx
                ? 'bg-primary/20 text-primary ring-2 ring-primary/50 shadow-sm shadow-primary/30'
                : 'bg-elevated text-muted hover:text-default hover:bg-accented/60'"
              @click="selectPackage(idx)"
            >
              <UIcon
                :name="pkg.icon"
                class="size-4"
              />
            </button>
          </UTooltip>
        </div>

        <span class="font-mono text-xs text-muted">
          @nodecfdi/{{ activePkg.name }}
        </span>
      </div>
    </div>
  </div>
</template>
