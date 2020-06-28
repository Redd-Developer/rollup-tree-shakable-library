// Build configuration for the consumer application.
// This is NOT something you need to make your library tree-shakable.
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'consumer/src/index.js',
  output: {
    file: 'consumer/build/index.js',
    format: 'umd',
  },
  plugins: [resolve()],
}
