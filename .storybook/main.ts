import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	// Required
	framework: '@storybook/react-vite',
	stories: [
		'../src/components/**/*.mdx',
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	// Optional
	addons: ['@storybook/addon-essentials'],
	docs: {
		autodocs: 'tag',
	},
	// staticDirs: ['../public'],
};

export default config;

// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
// 	stories: [
// 		'../src/components/**/*.mdx',
// 		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
// 	],
// 	addons: [
// 		'@storybook/addon-links',
// 		'@storybook/addon-essentials',
// 		'@storybook/addon-interactions',
// 	],
// 	framework: {
// 		name: '@storybook/react-vite',
// 		options: {},
// 	},
// 	docs: {
// 		autodocs: 'tag',
// 	},
// };
// export default config;
