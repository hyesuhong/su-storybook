import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

// rollup.config.js
export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.exports['.'].import,
				format: 'esm',
			},
			{
				file: pkg.exports['.'].require,
				format: 'cjs',
			},
		],
		plugins: [
			esbuild({
				include: /\.[jt]sx?$/,

				minify: process.env.NODE_ENV === 'production',

				jsx: 'automatic', // default, or 'preserve'
			}),
			// typescript({ clean: true }),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'src/index.ts',
		output: [
			{
				file: './dist/esm/index.d.ts',
				format: 'esm',
			},
			{
				file: './dist/cjs/index.d.ts',
				format: 'cjs',
			},
		],
		plugins: [dts()],
	},
];
