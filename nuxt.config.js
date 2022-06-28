export default {
  head: {
    title: 'Abedo',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no, maximum-scale=1'
      },
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/open-graph-main.png'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/new-logo-favicon.png'}
    ]
  },
  ssr: true,
  target: 'server',
  css: [
    '@assets/scss/style.scss',
    "swiper/css/swiper.css"
  ],
  plugins: [
    '@plugins/v-mask.js',
    '@plugins/clientHook.client.js'
  ],
  components: true,

  buildModules: [],
  modules: ['cookie-universal-nuxt', '@nuxtjs/axios', '@nuxtjs/style-resources'],
  generate: {
    crawler: false,
    fallback: true
  },
  styleResources: {
    scss: [
      '@assets/scss/style.scss'
    ]
  },
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  axios: {
    // baseUrl: "http://127.0.0.1:8000"
    baseUrl: "https://abedo.ru"
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true
  }
}
