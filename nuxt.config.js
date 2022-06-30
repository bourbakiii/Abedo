export default {
  head: {
    title: 'Abedo - маркетплейс малого и среднего бизнеса',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no, maximum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Маркетплейс Abedo - место где представлены товары и услуги малого и среднего бизнеса. Рестораны и кафе, товары от производителей и ручной работы, продукты питания, товары для дома, одежда и обувь, товары и услуги для детей, и многое другое.'
      },
      {name: 'format-detection', content: 'telephone=no'},

      {
        hid: 'og:image',
        property: 'og:image',
        content: '/open-graph-main.png'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Abedo - маркетплейс малого и среднего бизнеса'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/new-logo-favicon.png'}
    ]
  },
  ssr: true,
  target: 'server',
  css: [

    // '@assets/scss/_variables.scss',
    // '@assets/scss/_fonts.scss',
    // '@assets/scss/_spinner-styles.scss',
    // '@assets/scss/_titles.scss',
    // '@assets/scss/_transitions.scss',
    // '@assets/scss/_style.scss',
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
      '@assets/scss/_variables.scss',
      '@assets/scss/_fonts.scss',
      '@assets/scss/_spinner-styles.scss',
      '@assets/scss/_titles.scss',
      '@assets/scss/_transitions.scss',
      '@assets/scss/_style.scss'
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
