// rollup.config.js
import json from 'rollup-plugin-json';
import vue from 'rollup-plugin-vue'
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve({extensions: ['.vue']}),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts', '.tsx', '.vue'],
            runtimeHelpers: true,
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
            ],
            plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ["@babel/plugin-transform-runtime"]
            ]
        }),
        vue(),
        json()
    ]
}
