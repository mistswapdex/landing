const linguiConfig = require('./lingui.config.js')
 
const { locales, sourceLocale } = linguiConfig

module.exports = {
  reactStrictMode: true,
  i18n: {

    defaultLocale: "en",
    locales: ["en", "es"],
  }
 
}
