import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { cva } from 'class-variance-authority';

import { tailwindMerge } from '@/utils/tailwindMerge';

interface Props
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		VariantProps<typeof buttonStyles> {}

const buttonStyles = cva('py-2 px-3 font-semibold items-center rounded-lg flex gap-3', {
	variants: {
		variant: {
			primary: 'bg-primary-300 text-white dark:bg-zinc-950 dark:text-white',
			secondary:
				'border border-primary-400 text-primary-400 dark:text-zinc-300 dark:border-zinc-300',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

export function Button({ variant, className, ...props }: Props) {
	return (
		<button
			className={tailwindMerge(buttonStyles({ variant }), className)}
			{...props}
		/>
	);
}
