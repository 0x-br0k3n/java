import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java",
  description: "Java Notes",
  base: '/java/',
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'algolia-site-verification', content: "A1D1DA947CBAA955" }])
    
    return head
  },
  markdown: {
      math: true
    },
  themeConfig: {
    
    search : {
      provider: 'algolia',
      options: {
        appId: 'YLKV8E4WUN',
        apiKey: '23bc1cecc47bdd91c7e8540b8d991a0d',
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
