import { defineConfig } from 'astro/config';

// astro.config.mjs
import Unocss from '@unocss/astro';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss({
    presets: [
      /* no presets by default */
    ]
    /* options */
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }),
  storyblok({
    accessToken: 'cuErn6RMY3Q01P43QrMPbAtt',
    bridge: true,
    apiOptions: {}, // storyblok-js-client options
    useCustomApi: false,
    components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
    },
  })]
});