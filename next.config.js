console.log({
  PLACES_API_KEY: process.env.PLACES_API_KEY
})
module.exports = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  env: {
    PLACES_API_KEY: process.env.PLACES_API_KEY
  }
}
