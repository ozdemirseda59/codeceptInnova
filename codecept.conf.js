exports.config = {
  tests: './*_test.js',
  output: './reports',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptInova',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}
