import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	// Required
	framework: '@storybook/react-vite',
	stories: [
		'../src/components/**/*.mdx',
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
	// staticDirs: ['../public'],
};

export default config;
