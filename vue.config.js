module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/site/' : '/',
    pages: {
        index: {
          entry: 'src/main.ts',
          title: 'Lernejo',
        },
      }
}
