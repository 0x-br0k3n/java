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
<<<<<<< HEAD
      { text: 'Contribue to this project', link: '/contribute' }
=======
      { text: 'Start Learning', link: '/intro/About Java' }
>>>>>>> 089d02860b8d90e9328e7a820a7295d86ef0cc32
    ],

    sidebar: [
      {
        text: 'Introduciton',
<<<<<<< HEAD
        collapsed: false,
=======
	collapsed: false,
>>>>>>> 089d02860b8d90e9328e7a820a7295d86ef0cc32
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
