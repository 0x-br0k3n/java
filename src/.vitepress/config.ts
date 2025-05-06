import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java",
  description: "Java Notes",
  base: '/java/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Learning', link: '/About Java' }
    ],

    sidebar: [
      {
        text: 'Introduciton',
        items: [
          { text: 'About Java', link: '/intro/About Java' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
