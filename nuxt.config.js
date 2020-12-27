export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'NuxtTemplate',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
    ],
    styleResources: {
        scss: '@/assets/scss/core/base.scss'
    },
    plugins: [],

    components: true,

    buildModules: [],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
    ],


    axios: {},

    build: {
        //transpile: ['vuetify'] //IE11
        postcss: [
            require('autoprefixer')({}),
            require('cssnano')({
                preset: [
                    'default', {
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
            }),
            require('postcss-sort-media-queries')({
                sort: require('sort-css-media-queries')
            }),
        ],
    }
}
