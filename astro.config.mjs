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
              label: '@nodecfdi/cfdi-core',
              collapsed: true,
              items: [{ label: 'Instalación y uso', link: '/librarys/cfdi-core/getting-started' }],
            },
            {
              label: '@nodecfdi/cfdi-expresiones',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/cfdi-expresiones/getting-started' },
              ],
            },
            {
              label: '@nodecfdi/rfc',
              collapsed: true,
              items: [
                { label: 'Instalación y uso', link: '/librarys/rfc/getting-started' },
                { label: 'Rfc', link: '/librarys/rfc/rfc' },
                { label: 'Generador - Fakes', link: '/librarys/rfc/fakers' },
                { label: 'RFC a número', link: '/librarys/rfc/rfc-integer-converter' },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: false,
    }),
  ],
});
