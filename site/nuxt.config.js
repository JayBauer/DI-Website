const path = require('path')

module.exports = {
	modules: [
		'@nuxtjs/apollo',
		'@nuxtjs/dotenv',
		'@nuxtjs/sitemap'
	],
	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: '%s | Diagnostic Intelligence',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Diagnostic Intelligence'
			},
			{
				name: 'msvalidate.01',
				content: 'DC5BA6A27DEC789154A717AA36018347'
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/img/DI-logo--favicon.png' }
		],
		script: [{ src: 'https://js.stripe.com/v3/' }]
	},
	/*
	** Sitemap
	*/
	sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://diagnosticintelligence.ca',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    // exclude: [
    //   '/secret',
    //   '/admin/**'
    // ],
    // routes: [
    //   '/page/1',
    //   {
    //     url: '/page/2',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmodISO: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
	/*
	** Customize the progress bar color
	*/
	// loading: '~/components/Loading.vue',
	loading: {
		color: '#f68938',
		height: '5px'
	},

	performance: {
		prefetch: false
	},

	apollo: {
		clientConfigs: {
			default: '~/apollo/default.js'
		}
	},

	router: {
		middleware: 'getUser'
	},

	// serverMiddleware: ['~/middleware/getUser'],

	plugins: ['~plugins/global.js'],

	css: ['@fortawesome/fontawesome/styles.css', 'vuetify/dist/vuetify.min.css'],

	/*
	** Build configuration
	*/
	build: {
		postcss: [
			require('stylelint'),
			require('postcss-easy-import')({ path: ['./assets/css'], prefix: '_' }),
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
			require('postcss-font-awesome'),
			require('postcss-pxtorem')(),
			require('postcss-custom-media'),
			require('postcss-media-minmax'),
			require('postcss-assets')({ loadPaths: ['static/img'] }),
			require('postcss-short'),
			require('postcss-image-set-polyfill')
		],
		// vendor: ['vue-carousel'],
		/*
		** Run ESLint on save
		*/
		extend(config, { isDev, isClient }) {
			config.performance.maxAssetSize = 500000
			config.resolve.alias['@style'] = path.resolve(__dirname, './assets/css')
			const alias = (config.resolve.alias = config.resolve.alias || {})
			alias['@r'] = '~'
			alias['@c'] = '~/components/'
			alias['@styles'] = '~/assets/css'
			if (isDev && isClient) {
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
