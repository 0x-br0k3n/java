import { defineConfig } from 'vitepress'
import head from "./head"

export default defineConfig({
  title: "Java",
  description: "Java Notes",
  base: '/java/',
  head,
  markdown: {
    math: true
  },
  themeConfig: {

    search: {
      provider: 'algolia',
      options: {
        appId: 'NK7W5RJF4F',
        apiKey: '6d71bba1875785ee6a3349c8af3f1b0b',
        indexName: '...'
      }
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
          { text: 'OOP', link: '/intro/OOP' }
        ]
      },
      {
        text: 'Variables and Datatypes',
        collapsed: true,
        items: [
          { text: 'Datatypes', link: '/variables-datatypes/Datatypes' },
          { text: 'Typecasting', link: '/variables-datatypes/Typecasting' }
        ]
      },
      {
        text: 'Boolean algebra',
        collapsed: true,
        items: [
          { text: 'Laws', link: '/boolean-algebra/Laws' },
          { text: 'K-map', link: '/boolean-algebra/K-map' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
