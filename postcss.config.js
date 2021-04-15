const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      importFrom: [
        'node_modules/@pluralsight/ps-design-system-normalize/dist/index.css',
      ],
    }),
  ],
}
