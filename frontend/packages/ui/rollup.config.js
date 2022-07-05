import url from '@rollup/plugin-url';
import del from 'rollup-plugin-delete';
import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        commonjs(),
        del({
            targets: `${pkg.main.split('/')[0]}/*`,
            runOnce: true,
        }),
        nodeResolve(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        url(),
        typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.json' }),
    ],
};
