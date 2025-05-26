import { defineConfig } from 'vitepress'
<<<<<<< Updated upstream
import head from "./head"

=======

// https://vitepress.dev/reference/site-config
>>>>>>> Stashed changes
export default defineConfig({
  title: "Java",
  description: "Java Notes",
  base: '/java/',
<<<<<<< Updated upstream
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
=======
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/credits' }
>>>>>>> Stashed changes
    ],

    sidebar: [
      {
<<<<<<< Updated upstream
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
=======
        text: 'Examples',
        items: [
          { text: 'About Java', link: '/intro/About Java' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
>>>>>>> Stashed changes
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
