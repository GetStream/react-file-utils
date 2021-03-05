import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import typescript from '@rollup/plugin-typescript';
import replace from 'rollup-plugin-replace';

import postcssimport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import vars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import color from 'postcss-color-function';

import pkg from './package.json';

const variables = {
  borderRadius: '4px',

  z0: '0',
  z1: '10',
  z2: '20',
  z3: '30',
  z4: '40',
  z5: '50',
  z6: '60',
  z7: '70',
  z8: '80',
  z9: '90',

  transparent: 'rgba(255,255,255,0)',
  white: '#ffffff',
  black: '#000000',
  primary: '#00D46A',
  info: '#0BA8E0',
  faded: '#DDDDDD',
  error: '#FF0000',
  fontColor: '#414D54',

  // Colors to optimize
  rafAttachedActivityAuthor: '#414D54',
  rafActivityFooterBorder: '#E6F0F2',
  rafCommentfieldBackground: '#F7F7F7', // lightest grey
  rafCardBackground: '#F4F4F4', // lighter grey
  rafCardBorder: '#A0B2B8', // grey
  rafDropdownBackground: '#313E47', // dark grey
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  watch: {
    chokidar: false,
  },
  external: [
    'blueimp-load-image',
    'react-images',
    'lodash',
    'react-dropzone',
    'immutable',
    'url-parse',
    'prop-types',
    'react-file-icon',
    '@fortawesome/react-fontawesome',
    '@fortawesome/free-regular-svg-icons',
    '@babel/runtime/regenerator',
    '@babel/runtime/helpers/asyncToGenerator',
    '@babel/runtime/helpers/objectWithoutProperties',
    '@babel/runtime/helpers/toConsumableArray',
    '@babel/runtime/helpers/objectSpread',
    '@babel/runtime/helpers/extends',
    '@babel/runtime/helpers/typeof',
    '@babel/runtime/helpers/defineProperty',
    '@babel/runtime/helpers/assertThisInitialized',
    '@babel/runtime/helpers/inherits',
    '@babel/runtime/helpers/getPrototypeOf',
    '@babel/runtime/helpers/possibleConstructorReturn',
    '@babel/runtime/helpers/createClass',
    '@babel/runtime/helpers/classCallCheck',
  ],
  plugins: [
    typescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    external(),
    postcss({
      plugins: [
        vars({ variables }),
        postcssimport(),
        cssnext({ warnForDuplicates: false }),
        nested(),
        color(),
      ],
      modules: false,
      extract: true,
      minimize: true,
    }),
    url(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
};
