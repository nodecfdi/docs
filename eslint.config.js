import eienjs from '@eienjs/eslint-config';

export default eienjs({
  formatters: true,
  vue: true,
  nuxt: {
    version: 4,
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
    erasableSyntaxOnly: true,
  },
  pnpm: true,
  markdown: false,
}).append({
  files: ['**/*.md'],
  rules: {
    '@stylistic/max-len': 'off',
    'format/prettier': 'off',
  },
});
