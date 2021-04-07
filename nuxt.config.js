export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Assignment',
    htmlAttrs: {
      lang: 'hr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Valentina Otočan' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
     ['nuxt-fontawesome', {
    component: 'fa', //customize component name
    imports: [{
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faInstagram']
        },
        {set: '@fortawesome/free-brands-svg-icons',
        icons: ['faFacebook']
        },
        {set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin']
        },
    ]
 }]
],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
