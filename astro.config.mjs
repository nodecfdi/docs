import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
      locales: {
        root: {
          label: 'Spanish',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Empezar',
          items: [{ label: 'Manifiesto', link: '/getting-started/manifesto' }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
