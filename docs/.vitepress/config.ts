import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JingRC',
  description: '邢智涵的个人博客',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: 'GitHub', link: 'https://github.com/ckjbug' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ckjbug' },
    ],
  },
})
