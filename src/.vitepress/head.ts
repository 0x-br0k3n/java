import type { HeadConfig } from 'vitepress'
const head: HeadConfig[] = [
    ['script', {async: true, src: './../javascript/index.js' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale:1.0' }]
]
export default head
