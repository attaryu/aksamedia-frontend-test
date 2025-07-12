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

const buttonStyles = cva('py-2 px-3 font-semibold items-center justify-center rounded-lg flex gap-3', {
	variants: {
		variant: {
			primary: 'bg-primary-300 text-white dark:bg-zinc-100 dark:text-zinc-900',
			secondary:
				'border border-primary-400 text-primary-400 dark:text-zinc-300 dark:border-zinc-400',
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
