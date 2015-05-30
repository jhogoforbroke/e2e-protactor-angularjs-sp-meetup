// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/**/*.spec.js'],
  multiCapabilities: [
    {
      'browserName': 'firefox'
    }
  ]
}
