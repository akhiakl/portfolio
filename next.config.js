// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const prod = process.env.NODE_ENV === 'production'
const baseUrl = process.env.BASE_URL

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: prod ? baseUrl : '',
}
