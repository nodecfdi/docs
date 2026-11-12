<template>
  <div
    class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,color-mix(in_oklab,var(--ui-primary)_14%,transparent),transparent_70%)]" />
    <div class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_85%)] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--ui-primary)_14%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--ui-primary)_14%,transparent)_1px,transparent_1px)] bg-size-[16px_16px]" />
    <div class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_85%)] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--ui-primary)_32%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--ui-primary)_32%,transparent)_1px,transparent_1px)] bg-size-[80px_80px]" />

    <!-- 永遠 (eien = eternal) -->
    <svg
      class="absolute left-1/2 top-1/2 w-[min(90vw,70rem)] -translate-x-1/2 -translate-y-1/2 text-primary opacity-30 drop-shadow-[0_0_18px_var(--ui-primary)]"
      viewBox="43 -816.4 1910.2 906.3"
    >
      <path
        d="M242.2-746.1L277.3-816.4L714.8-742.2L679.7-660.2Q460.9-714.8 242.2-746.1M168-558.6L168-636.7L578.1-636.7L578.1-488.3L621.1-402.3Q746.1-488.3 832-605.5L894.5-554.7Q800.8-418 664.1-328.1Q785.2-136.7 949.2-46.9L902.3 39.1Q703.1-89.8 578.1-335.9L578.1 3.9Q578.1 89.8 500 89.8L335.9 78.1L320.3 3.9L476.6 15.6Q500 15.6 500-7.8L500-558.6L168-558.6M70.3-359.4L70.3-433.6L414.1-433.6L414.1-359.4Q316.4-109.4 89.8 31.3L43-35.2Q253.9-168 332-359.4L70.3-359.4M1355.5-687.5L1355.5-753.9L1578.1-753.9L1578.1-808.6L1656.3-808.6L1656.3-753.9L1882.8-753.9L1882.8-687.5L1656.3-687.5L1656.3-628.9L1925.8-628.9L1925.8-562.5L1304.7-562.5L1304.7-628.9L1578.1-628.9L1578.1-687.5L1355.5-687.5M1363.3-308.6L1363.3-503.9L1871.1-503.9L1871.1-308.6L1648.4-308.6L1601.6-265.6L1734.4-210.9L1812.5-285.2L1871.1-246.1L1804.7-175.8L1921.9-109.4L1867.2-46.9Q1730.5-140.6 1578.1-199.2L1578.1-50.8L1503.9-50.8L1503.9-195.3L1335.9-117.2L1285.2-183.6Q1437.5-226.6 1554.7-308.6L1363.3-308.6M1437.5-437.5L1437.5-375L1796.9-375L1796.9-437.5L1437.5-437.5M1062.5-726.6L1117.2-785.2Q1195.3-734.4 1257.8-664.1L1203.1-597.7Q1136.7-675.8 1062.5-726.6M1050.8-386.7L1050.8-460.9L1246.1-460.9L1246.1-85.9Q1304.7-43 1390.6-31.2Q1476.6-19.5 1953.1-19.5L1914.1 66.4L1601.6 66.4Q1328.1 66.4 1214.8-31.2L1101.6 82L1046.9 0L1168-74.2L1168-386.7"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
      />
    </svg>

    <!-- Blueprint registration marks -->
    <span class="absolute left-6 top-6 size-5 border-l border-t border-primary/60" />
    <span class="absolute right-6 top-6 size-5 border-r border-t border-primary/60" />
    <span class="absolute bottom-6 left-6 size-5 border-b border-l border-primary/60" />
    <span class="absolute bottom-6 right-6 size-5 border-b border-r border-primary/60" />
  </div>
</template>
