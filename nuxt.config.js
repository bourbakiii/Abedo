export default {
  head: {
    title: 'Abedo',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content:"width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/abedo-logo.ico' }
    ]
  },
  css: [
    '@/assets/scss/style.scss',
    '@/assets/scss/variables.scss',
    '@/assets/scss/transitions.scss',
    '@/assets/scss/fonts.scss',
    '@/assets/scss/titles.scss',
  ],
  plugins: [
    '@plugins/v-mask.js',
    '@/plugins/clientHook.client.js'
  ],
  components: true,
  build: {},
  buildModules: [],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  generate:{
    crawler: false,
    fallback: true,
  },
  styleResources: {
    scss: [
      '@assets/scss/variables.scss',
      '@assets/scss/style.scss',
      '@assets/scss/transitions.scss',
      '@/assets/scss/fonts.scss',
      '@/assets/scss/titles.scss',
    ]
  },
  axios: {
    baseUrl: "http://127.0.0.1:8000"
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true
  }
}
