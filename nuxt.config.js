import i18n from './config/i18n'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'Vinyl Shop',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [],

  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },

  plugins: ['~/plugins/viewport.js'],

  components: true,

  buildModules: [
    // @TODO: set IOS tablet device type
    // '@nuxtjs/device',
    '@aceforth/nuxt-optimized-images'

  ],

  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    ['nuxt-social-meta',
      {
        url: 'Site url',
        title: 'Title',
        site_name: 'Site name',
        description: 'Site description',
        img: 'Link to image in static folder',
        locale: 'en_US',
        twitter: '@user',
        twitter_card: 'summary_large_image',
        themeColor: '#theme-color'
      }]
    // @TODO: set sitemap
    // '@nuxtjs/sitemap'
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  sitemap: {
    // options
  },

  babel: {
    presets (env, [preset, options]) {
      return [
        ['@nuxt/babel-preset-app', options]
      ]
    }
  },

  axios: {},

  build: {
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
    icon: {}
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    vueI18n: i18n
  }

}
