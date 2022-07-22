export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'atelier-crypto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  dotenv: {
    /* module options */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          // required: true,
          type: 'Bearer',
        },
        user: {
          property: false,
          autoFetch: false,
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: false, // { url: '/api/logout', method: 'post' },
          user: false, // { url: '/api/admin', method: 'get' },
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  router: {
    middleware: ['auth'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ['~/api/index.js'],
}
