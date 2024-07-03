import nodecfdiPrettierConfig from '@nodecfdi/prettier-config';

/** @type {import('prettier').Config} */
const config = {
  ...nodecfdiPrettierConfig,
  proseWrap: 'always',
};

export default config;
