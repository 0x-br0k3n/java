import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java",
  description: "Java Notes",
  base: '/java/',
  themeConfig: {
    search : {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribue to this project', link: '/contribute' }
    ],

    sidebar: [
      {
        text: 'Introduciton',
        collapsed: false,
        items: [
          { text: 'About Java', link: '/intro/About Java' },
          { text: 'OOP', link: '/intro/OOP' },
          { text: 'Datatypes', link: '/intro/Datatypes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
