import type { StorybookConfig } from '@storybook/react-vite';

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
};

export default config;
