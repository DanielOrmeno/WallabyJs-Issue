// tslint:disable
module.exports = {
  head: {
    title: 'Health Director',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt sample app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#46c0bd' },
  modules: ['nuxt-typescript'],
  css: [
    '~/assets/styles/global.less',
    'vue-material/dist/vue-material.min.css',
    '~/assets/styles/theme.scss'
  ],
  plugins: ['~/plugins/vue-material', '~/plugins/font-awesome', '~/plugins/vue-i18n'],
  build: {
    vendor: ['vue-material', 'reflect-metadata']
  }
}
