<template>
  <div
    class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,color-mix(in_oklab,var(--ui-primary)_14%,transparent),transparent_70%)]" />
    <div class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_85%)] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--ui-primary)_14%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--ui-primary)_14%,transparent)_1px,transparent_1px)] bg-size-[16px_16px]" />
    <div class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_85%)] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--ui-primary)_32%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--ui-primary)_32%,transparent)_1px,transparent_1px)] bg-size-[80px_80px]" />

    <!-- Anatomía CFDI: Tags XML, Sello Digital y Código QR Fiscal (Anexo 20) -->
    <svg
      class="absolute left-1/2 top-1/2 w-[min(92vw,72rem)] -translate-x-1/2 -translate-y-1/2 text-primary opacity-25 drop-shadow-[0_0_16px_var(--ui-primary)]"
      viewBox="0 0 1000 500"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-linecap="round"
      vector-effect="non-scaling-stroke"
    >
      <!-- Círculos concéntricos de alineación y calibración (Anexo 20) -->
      <circle
        cx="500"
        cy="250"
        r="220"
        stroke-width="1"
        stroke-dasharray="6 8"
        class="opacity-40"
      />
      <circle
        cx="500"
        cy="250"
        r="160"
        stroke-width="1"
        stroke-dasharray="3 5"
        class="opacity-30"
      />
      <circle
        cx="500"
        cy="250"
        r="3"
        fill="currentColor"
        class="opacity-75"
      />

      <!-- Cruz central de calibración óptica -->
      <line
        x1="500"
        y1="20"
        x2="500"
        y2="480"
        stroke-width="1"
        stroke-dasharray="4 8"
        class="opacity-20"
      />
      <line
        x1="20"
        y1="250"
        x2="980"
        y2="250"
        stroke-width="1"
        stroke-dasharray="4 8"
        class="opacity-20"
      />

      <!-- Tag XML izquierdo: `<` -->
      <g
        stroke-width="2.5"
        class="opacity-70"
      >
        <polyline points="240,110 130,250 240,390" />
        <polyline
          points="255,120 155,250 255,380"
          stroke-width="1"
          stroke-dasharray="4 4"
          class="opacity-50"
        />
      </g>

      <!-- Tag XML derecho: `/>` -->
      <g
        stroke-width="2.5"
        class="opacity-70"
      >
        <line
          x1="740"
          y1="390"
          x2="790"
          y2="110"
        />
        <polyline points="790,110 900,250 790,390" />
        <polyline
          points="775,120 875,250 775,380"
          stroke-width="1"
          stroke-dasharray="4 4"
          class="opacity-50"
        />
      </g>

      <!-- Líneas de datos XML conectando flancos y centro -->
      <g
        stroke-width="1.2"
        class="opacity-40"
      >
        <path d="M240,160 L320,160 L340,180 L360,180" />
        <circle
          cx="320"
          cy="160"
          r="3"
          fill="currentColor"
        />
        <path d="M240,340 L300,340 L330,310 L360,310" />
        <circle
          cx="300"
          cy="340"
          r="3"
          fill="currentColor"
        />
        <path
          d="M190,250 L360,250"
          stroke-dasharray="4 4"
        />

        <path d="M740,160 L680,160 L660,180 L640,180" />
        <circle
          cx="680"
          cy="160"
          r="3"
          fill="currentColor"
        />
        <path d="M740,340 L700,340 L670,310 L640,310" />
        <circle
          cx="700"
          cy="340"
          r="3"
          fill="currentColor"
        />
        <path
          d="M810,250 L640,250"
          stroke-dasharray="4 4"
        />
      </g>

      <!-- Marco contenedor del Comprobante Fiscal / Sello QR -->
      <g class="opacity-60">
        <rect
          x="360"
          y="100"
          width="280"
          height="300"
          rx="12"
          stroke-width="1.8"
        />
        <rect
          x="370"
          y="110"
          width="260"
          height="280"
          rx="8"
          stroke-width="1"
          stroke-dasharray="4 4"
          class="opacity-40"
        />

        <line
          x1="380"
          y1="125"
          x2="480"
          y2="125"
          stroke-width="2"
        />
        <line
          x1="520"
          y1="125"
          x2="620"
          y2="125"
          stroke-width="1"
          stroke-dasharray="2 4"
        />
      </g>

      <!-- Módulos del Código QR Fiscal (Anexo 20 SAT) -->
      <g
        stroke-width="2"
        class="opacity-80"
      >
        <!-- 1. Patrón superior izquierdo -->
        <rect
          x="390"
          y="145"
          width="56"
          height="56"
          rx="4"
        />
        <rect
          x="400"
          y="155"
          width="36"
          height="36"
          rx="2"
          stroke-width="1"
        />
        <rect
          x="408"
          y="163"
          width="20"
          height="20"
          rx="1"
          fill="currentColor"
          stroke="none"
        />

        <!-- 2. Patrón superior derecho -->
        <rect
          x="554"
          y="145"
          width="56"
          height="56"
          rx="4"
        />
        <rect
          x="564"
          y="155"
          width="36"
          height="36"
          rx="2"
          stroke-width="1"
        />
        <rect
          x="572"
          y="163"
          width="20"
          height="20"
          rx="1"
          fill="currentColor"
          stroke="none"
        />

        <!-- 3. Patrón inferior izquierdo -->
        <rect
          x="390"
          y="299"
          width="56"
          height="56"
          rx="4"
        />
        <rect
          x="400"
          y="309"
          width="36"
          height="36"
          rx="2"
          stroke-width="1"
        />
        <rect
          x="408"
          y="317"
          width="20"
          height="20"
          rx="1"
          fill="currentColor"
          stroke="none"
        />

        <!-- Timing patterns -->
        <line
          x1="454"
          y1="173"
          x2="546"
          y2="173"
          stroke-width="2"
          stroke-dasharray="4 4"
        />
        <line
          x1="418"
          y1="209"
          x2="418"
          y2="291"
          stroke-width="2"
          stroke-dasharray="4 4"
        />

        <!-- Patrón de alineación inferior derecho -->
        <rect
          x="562"
          y="307"
          width="32"
          height="32"
          rx="3"
          stroke-width="1.5"
        />
        <rect
          x="573"
          y="318"
          width="10"
          height="10"
          rx="1"
          fill="currentColor"
          stroke="none"
        />

        <!-- Celdas de datos de la matriz -->
        <rect
          x="460"
          y="195"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />
        <rect
          x="484"
          y="195"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />
        <rect
          x="526"
          y="195"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />

        <rect
          x="460"
          y="219"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />
        <rect
          x="502"
          y="219"
          width="18"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />
        <rect
          x="574"
          y="219"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />

        <rect
          x="484"
          y="243"
          width="32"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-70"
        />
        <rect
          x="536"
          y="243"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />

        <rect
          x="460"
          y="267"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-70"
        />
        <rect
          x="502"
          y="267"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />
        <rect
          x="526"
          y="267"
          width="24"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />

        <rect
          x="460"
          y="299"
          width="22"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-60"
        />
        <rect
          x="502"
          y="299"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />

        <rect
          x="470"
          y="323"
          width="14"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-80"
        />
        <rect
          x="520"
          y="323"
          width="28"
          height="14"
          rx="1"
          fill="currentColor"
          stroke="none"
          class="opacity-70"
        />
      </g>

      <!-- Cruces de registro óptico y calibración en esquinas -->
      <g
        stroke-width="1.5"
        class="opacity-50"
      >
        <path d="M80,60 L100,60 M90,50 L90,70" />
        <path d="M900,60 L920,60 M910,50 L910,70" />
        <path d="M80,440 L100,440 M90,430 L90,450" />
        <path d="M900,440 L920,440 M910,430 L910,450" />

        <circle
          cx="90"
          cy="60"
          r="14"
          stroke-dasharray="3 3"
        />
        <circle
          cx="910"
          cy="60"
          r="14"
          stroke-dasharray="3 3"
        />
        <circle
          cx="90"
          cy="440"
          r="14"
          stroke-dasharray="3 3"
        />
        <circle
          cx="910"
          cy="440"
          r="14"
          stroke-dasharray="3 3"
        />
      </g>
    </svg>

    <!-- Blueprint registration marks -->
    <span class="absolute left-6 top-6 size-5 border-l border-t border-primary/60" />
    <span class="absolute right-6 top-6 size-5 border-r border-t border-primary/60" />
    <span class="absolute bottom-6 left-6 size-5 border-b border-l border-primary/60" />
    <span class="absolute bottom-6 right-6 size-5 border-b border-r border-primary/60" />
  </div>
</template>
