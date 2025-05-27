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
      provider: 'local',
      options: {
       detailedView: true 
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
          { text: 'Typecasting', link: '/variables-datatypes/Typecasting' },
          { text: 'Operators and Expressions', link: '/variables-datatypes/Operators and Expressions'}
        ]
      },
      {
        text: 'String',
        collapsed: true,
        items: [
            { text: 'Introduction', link: '/string/Introduction'}
        ]
      },
      {
        text: 'Boolean algebra',
        collapsed: true,
        items: [
          { text: 'Laws', link: '/boolean-algebra/Laws' },
          { text: 'K-map', link: '/boolean-algebra/K-map' }
        ]
      },
      {
        text: 'Extra',
        collapsed: true,
        items: [
            { text: 'Memory', link:'/extra/Memory' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
