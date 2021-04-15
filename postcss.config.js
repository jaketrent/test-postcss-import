// const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssUrl = require('postcss-url')

module.exports = {
  plugins: [
    // postcssImport(),
    postcssUrl(),
    postcssPresetEnv({
      importFrom: [
        'node_modules/@pluralsight/ps-design-system-normalize/dist/index.css',
      ],
    }),
  ],
}
