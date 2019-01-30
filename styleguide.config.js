// @noflow
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
      // content: 'docs/other-components.md',
      components: 'src/components/**/*.js',
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
  ],
  template: {
    favicon: 'https://getstream.imgix.net/images/favicons/favicon-96x96.png',
    link: {
      rel: 'stylesheet',
      type: 'text/css',
      href: './dist/index.css',
    },
  },
  require: [
    path.join(path.resolve(path.dirname('')), 'dist/index.css'),
    path.join(path.resolve(path.dirname('')), 'src/styleguide-styles.css'),
  ],
};
