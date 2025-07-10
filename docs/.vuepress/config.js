import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { iconPlugin } from "@vuepress/plugin-icon"

export default defineUserConfig({
  plugins: [
    iconPlugin({
      provider: 'iconify'
    })
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        home: true,
        text: "Home",
        link: '/',
        heroImage: "/mgkl.jpg",
        icon: "material-symbols:home"
      }
    ],
    sidebar: [
      {
        text: "Preface",
        collapsible: true,
        children: [
          { text: "Sec 1" },
          { text: "Sec 2" }
        ]
      }
    ],
    repo: "mgkl92/mgkl92.github.io",
    docsRepo: "mgkl92/mgkl92.github.io",
    docsBranch: "main",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
  }),
  lang: "zh-CN",
  title: "MGKL's Note",
  description: "曾晓生命脆弱，未料如此不堪",
})
