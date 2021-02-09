export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'Vinyl Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [

  ],
  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },
  plugins: ['~/plugins/viewport.js'],

  components: true,

  buildModules: [
    '@nuxtjs/device',
    '@nuxt/typescript-build',
    '@aceforth/nuxt-optimized-images',

  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  babel: {
    presets (env, [preset, options]) {
      return [
        ['@nuxt/babel-preset-app', options]
      ]
    }
  },
  axios: {},

  build: {
    transpile: [
      'vuex-module-decorators'
    ],
    // transpile: ['vuetify'] //IE11
    postcss: [
      require('autoprefixer')({}),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }),
      require('postcss-sort-media-queries')({
        sort: require('sort-css-media-queries')
      })
    ]
  },
  optimizedImages: {
    inlineImageLimit: 1000,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'jpg'],
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  pwa: {
    icon: {

    }
  }
}
