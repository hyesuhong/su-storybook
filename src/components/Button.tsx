import { styled } from 'styled-components';

const DefaultButton = styled.button<{
	$primary: boolean;
	$size: 'small' | 'medium' | 'large';
}>`
	background: ${(props) => (props.$primary ? '#492CFA' : '#fff')};
	padding: ${(props) =>
		props.$size === 'large'
			? '11px 21px'
			: props.$size === 'medium'
			? '6px 15px'
			: '4px 8px'};
	border-radius: ${(props) => (props.$size === 'small' ? '4px' : '5px')};
	border: ${(props) => (props.$primary ? 'none' : '1px solid #bbb')};
	color: ${(props) => (props.$primary ? '#fff' : '#000')};
	box-sizing: border-box;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		${(props) =>
			props.$primary ? 'background: #5E5BF9;' : 'border-color: #DDDDDD;'}
	}

	&:focus {
		${(props) =>
			props.$primary ? 'background: #2306E0;' : 'border-color: #aaa;'}
	}

	&:active {
		${(props) =>
			props.$primary
				? 'background: #220DA5;'
				: 'border-color: #aaa; background: #f4f4f4;'}
	}

	&:disabled {
		${(props) => (props.$primary ? 'background: #eee;' : 'border-color: #eee;')}
		color: #aaa;
		cursor: not-allowed;
	}
`;

interface IButtonProps {
	primary?: boolean;
	// backgroundColor?: string | null;
	size?: 'small' | 'medium' | 'large';
	label: string;
	disabled: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
	primary = false,
	// backgroundColor = null,
	size = 'medium',
	label,
	disabled,
	onClick,
	...props
}: IButtonProps) => {
	return (
		<DefaultButton
			$primary={primary}
			// backgroundColor={backgroundColor}
			$size={size}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{label}
		</DefaultButton>
	);
};
