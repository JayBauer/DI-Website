const path = require('path')


module.exports = {
  modules: ['@nuxtjs/apollo'],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Diagnostic Illumination',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Diagnostic Illumination' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  },
  router: {
    middleware: 'getUser'
  },
  /*
  ** Build configuration
  */
  plugins: ['~plugins/global.js'],
  build: {
    postcss: [
      require('stylelint'),
      require('postcss-easy-import')({ path: [ './assets/css' ], prefix: '_' }),
      require('postcss-advanced-variables'),
      require('postcss-nested'),
      require('postcss-define-function'),
      require('postcss-extend-rule'),
      require('postcss-hexrgba'),
      require('postcss-random'),
      require('postcss-math')({ functionName: 'math' }),
      require('autoprefixer')(),

      // Grid
      require('lost'),

      // Utilities
      require('postcss-font-magician')({ foundries: ['hosted google'], variants: { 'Muli': {} }, hosted: ['./assets/fonts'] }),
      require('postcss-pxtorem')(),
      require('postcss-custom-media'),
      require('postcss-media-minmax'),
      require('postcss-font-awesome'),
      require('postcss-assets')({ loadPaths: [ 'assets/img', 'static/img' ] }),
      require('postcss-short'),
      require('postcss-image-set-polyfill')
    ],
    // vendor: ['vue-carousel'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.resolve.alias['@style'] = path.resolve(__dirname, './assets/css')
      if (isDev && isClient) {
        const alias = config.resolve.alias = config.resolve.alias || {}
        alias['@r'] = '~'
        alias['@c'] = '~components/'
        alias['@styles'] = '~assets/css'

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
