// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://uidesignprocess.tech',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'daily',
    })
  ]
})
