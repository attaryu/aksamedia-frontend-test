import { tailwindMerge } from '@/utils/tailwindMerge';
import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

interface Props extends VariantProps<typeof textStyles> {
	children: React.ReactNode;
	tag?: 'h1' | 'h2' | 'h3' | 'p' | 'small';
	className?: string;
}

const textStyles = cva('dark:text-zinc-100', {
	variants: {
		styling: {
			h1: 'text-4xl font-bold',
			h2: 'text-3xl font-semibold',
			h3: 'text-2xl font-semibold',
			p: 'text-base text-zinc-800 dark:text-zinc-300',
			small: 'text-sm text-zinc-400 dark:text-zinc-600',
		},
	},
	defaultVariants: {
		styling: 'p',
	},
});

export function Text({ className, tag = 'p', styling, children }: Props) {
	const Tag = tag;

	return (
		<Tag
			className={tailwindMerge(
				textStyles({ styling: styling ?? tag }),
				className
			)}
		>
			{children}
		</Tag>
	);
}
