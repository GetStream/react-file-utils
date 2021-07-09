/* globals __dirname */
/* eslint-env commonjs*/
const path = require('path');

module.exports = {
  title: 'React File Utils - Docs',
  styleguideDir: 'docs',
  webpackConfig: require('./webpack.config.styleguidist.js'),
  styleguideComponents: {
    PathlineRenderer: path.join(
      __dirname,
      'src/styleguideComponents/PathlineRenderer.js',
    ),
  },
  sortProps: (props) => props,
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/*.tsx',
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
  ],
  template: {
    favicon: 'https://getstream.imgix.net/images/favicons/favicon-96x96.png',
    link: {
      rel: 'stylesheet',
      type: 'text/css',
    },
  },
  require: [
    path.join(path.resolve(path.dirname('')), 'src/styleguide-styles.css'),
  ],
};
