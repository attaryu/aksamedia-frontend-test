import { Button } from '../Button';

type Props = {
	onClick?: () => void;
	children: React.ReactNode;
	active?: boolean;
	disabled?: boolean;
};

export function PaginationButton({
	children,
	onClick,
	active,
	disabled,
}: Props) {
	return (
		<Button
			variant={active ? 'primary' : 'secondary'}
			className="size-10 md:size-11 p-0 text-base"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
}
