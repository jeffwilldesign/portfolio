const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const Records = require('spike-records')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const scss = require('postcss-scss')
const lost = require('lost')
const env = process.env.SPIKE_ENV
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.scss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  module: {
    rules: [{ test: /\.scss/, use: [{ loader: 'sass-loader' }] }]
  },
  plugins: [new Records({
    addDataTo: locals,
    work: { file: './assets/data/work.json' }
  })],
  reshape: htmlStandards({
    parser: sugarml,
    locals: (ctx) => {
      locals.pageId = pageId(ctx)
      return locals
    },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    parser: scss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production',
    appendPlugins: lost
  }),
  dumpDirs: ['views', 'assets', 'config'],
  babel: jsStandards(),
  server: {
    logLevel: 'info'
  }
}
