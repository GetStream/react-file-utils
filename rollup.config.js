import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import replace from 'rollup-plugin-replace';

import atImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import nested from 'postcss-nested';
import colorFunction from 'postcss-color-function';
import vars from 'postcss-simple-vars';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    'react-images',
    'lodash',
    'react-dropzone',
    'immutable',
    'url-parse',
    'prop-types',
    '@fortawesome/react-fontawesome',
    '@fortawesome/free-regular-svg-icons',
    '@babel/runtime/regenerator',
    '@babel/runtime/helpers/asyncToGenerator',
    '@babel/runtime/helpers/objectWithoutProperties',
    '@babel/runtime/helpers/toConsumableArray',
    '@babel/runtime/helpers/objectSpread',
    '@babel/runtime/helpers/extends',
    '@babel/runtime/helpers/defineProperty',
    '@babel/runtime/helpers/assertThisInitialized',
    '@babel/runtime/helpers/inherits',
    '@babel/runtime/helpers/getPrototypeOf',
    '@babel/runtime/helpers/possibleConstructorReturn',
    '@babel/runtime/helpers/createClass',
    '@babel/runtime/helpers/classCallCheck',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    external(),
    postcss({
      plugins: [
        atImport(),
        nested(),
        //vars({ variables }),
        colorFunction(),
        cssnext(),
      ],
      modules: false,
      extract: true,
    }),
    url(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    commonjs()
  ]
}
