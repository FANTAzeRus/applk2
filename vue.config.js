 module.exports = {
   // css: {
   //   loaderOptions: {
   //     sass: {
   //       prependData: `@import "@/assets/sass/_vars.sass"`
   //     }
   //   }
   // },
   // devServer: {
   //     port: 3555
   // }
   publicPath: process.env.NODE_ENV === 'production'
     ? '/applk2/'
     : '/',

   pluginOptions: {
     i18n: {
       locale: 'ru',
       fallbackLocale: 'en',
       localeDir: 'locales',
       enableInSFC: false,
       enableBridge: false
     }
   }
 }
