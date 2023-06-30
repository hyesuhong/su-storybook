import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		primary: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		size: 'medium',
		label: 'Button',
	},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
	args: {
		primary: true,
	},
};

export const Secondary = {
	args: {
		primary: false,
	},
};
