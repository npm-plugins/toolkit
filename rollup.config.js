import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'

const moduleNmae = 'toolkit'

const file = type => {
  return `lib/${moduleNmae}.${type}.js`
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: file('min'),
      format: 'umd',
      name: moduleNmae
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    minify({ comments: false })
  ]
}