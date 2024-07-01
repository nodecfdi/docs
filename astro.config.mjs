import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://nodecfdi.com',
  integrations: [
    starlight({
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
              label: '@nodecfdi/rfc',
              items: [
                { label: 'Instalación y uso', link: '/librarys/rfc/getting-started' },
                { label: 'Rfc', link: '/librarys/rfc/rfc' },
                { label: 'Generador - Fakes', link: '/librarys/rfc/fakers' },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
