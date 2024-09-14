import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://nodecfdi.com',
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/nodecfdi/docs/edit/main/',
      },
      title: 'NodeCfdi',
      tagline: 'Librerías de Node para trabajar con CFDI',
      description:
        'Librerías de NodeJS, Javascript y Typescript para trabajar con CFDI y otras herramientas del SAT',
      social: {
        github: 'https://github.com/nodecfdi',
        discord: 'https://discord.gg/AsqX8fkW2k',
      },
      favicon: '/favicon.ico',
      locales: {
        root: {
          label: 'Spanish',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Empezar',
          items: [
            { label: 'Manifiesto', link: '/getting-started/manifesto' },
            { label: 'Código de Conducta', link: '/getting-started/code-of-conduct' },
            { label: 'Contribuciones', link: '/getting-started/contributing' },
          ],
        },
        {
          label: 'Librerias',
          items: [
            {
              label: 'base-converter',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/base-converter/getting-started' },
              ],
            },
            {
              label: 'cfdi-cleaner',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-cleaner/getting-started' },
                { label: 'Limpiadores', link: '/librarys/cfdi-cleaner/cleaners' },
              ],
            },
            {
              label: 'cfdi-core',
              collapsed: true,
              items: [{ label: 'Instalación y uso', link: '/librarys/cfdi-core/getting-started' }],
            },
            {
              label: 'cfdi-elements',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-elements/getting-started' },
              ],
            },
            {
              label: 'cfdi-expresiones',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-expresiones/getting-started' },
              ],
            },
            {
              label: 'cfdi-to-json',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-to-json/getting-started' },
                { label: 'Acerca de', link: '/librarys/cfdi-to-json/about' },
              ],
            },
            {
              label: 'cfdi-to-pdf',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-to-pdf/getting-started' },
              ],
            },
            {
              label: 'credentials',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/credentials/getting-started' },
              ],
            },
            {
              label: 'rfc',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/rfc/getting-started' },
                { label: 'Rfc', link: '/librarys/rfc/rfc' },
                { label: 'Generador - Fakes', link: '/librarys/rfc/fakers' },
                { label: 'RFC a número', link: '/librarys/rfc/rfc-integer-converter' },
              ],
            },
            {
              label: 'xml-schema-validator',
              collapsed: true,
              items: [
                {
                  label: 'Instalación y uso',
                  link: '/librarys/xml-schema-validator/getting-started',
                },
              ],
            },
          ],
        },
        {
          label: 'Referencias',
          items: [{ label: 'Solución de problemas', link: '/reference/troubleshooting' }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: false,
    }),
  ],
});
