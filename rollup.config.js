import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: [{
    file: 'dist/safe-assign.esm.js',
    format: 'esm'
  }, {
    file: 'dist/safe-assign.common.js',
    format: 'cjs'
  }],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
