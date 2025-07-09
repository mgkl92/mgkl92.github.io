import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: '/' }
    ],
    sidebar: [
      {
        text: "Preface", collapsible: false,
        children: [
          { text: "Sec 1" },
          { text: "Sec 2" }
        ]
      }
    ]
  }),
})
