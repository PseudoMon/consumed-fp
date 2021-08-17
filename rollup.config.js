import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

export default {
    input: "main.js",
    output: {
        file: "dist/bundle.js",
        format: "esm",
    },
    plugins: [
        resolve(),
        postcss({
            extract: path.resolve('dist/consumed.css')
        }),
        serve('dist'),
        livereload({
            watch: 'dist',
            port: 10001
        })
    ]
}