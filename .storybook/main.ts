import type { StorybookConfig } from '@storybook/react-vite';
const path = require('path');

const config: StorybookConfig = {
	// Required
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	stories: [
		// '../src/components/**/*.mdx',
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	// Optional
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	docs: {
		autodocs: 'tag',
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	viteFinal: async (config, { configType }) => {
		if (!config.resolve) {
			return config;
		}
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
		};

		return config;
	},
};

export default config;
