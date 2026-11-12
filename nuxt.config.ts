// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
  ],
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },
  runtimeConfig: {
    siteUrl: 'https://nodecfdi.com',
    public: {
      siteUrl: 'https://nodecfdi.com',
    },
  },
  experimental: {
    asyncContext: true
  },
  compatibilityDate: '2026-06-30',
  typescript: {
    nodeTsConfig: {
      include: ['../content.config.ts'],
    },
  },
  llms: {
    domain: 'https://nodecfdi.com',
    title: 'NodeCfdi',
    description: 'NodeCfdi es una organización que brinda librerías de NodeJS, Javascript y Typescript para trabajar con CFDI y otras herramientas del SAT'
  },
  ogImage: {
    zeroRuntime: true
  },
  prerender: {
    routes: [
      '/'
    ],
    crawlLinks: true
  },
});
