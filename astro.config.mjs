import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      customCss: [
        './src/tailwind.css',
      ],
      social: {
        github: 'https://github.com/withastro/starlight'
      },
      sidebar: [{
        label: 'Guides',
        items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
      }, {
        label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      }]
  }),
  tailwind({
    applyBaseStyles: false,
  }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  }
});
