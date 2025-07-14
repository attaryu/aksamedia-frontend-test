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

const buttonStyles = cva(
	'py-2 px-3 font-semibold items-center justify-center rounded-lg flex gap-3 cursor-pointer disabled:cursor-not-allowed transition-all md:text-lg',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-300 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-primary-400 dark:hover:bg-zinc-400',
				secondary:
					'border border-primary-400 text-primary-400 bg-white dark:text-zinc-300 dark:border-zinc-400  disabled:text-primary-200 disabled:border-primary-200 dark:disabled:text-zinc-600 dark:disabled:border-zinc-600 hover:bg-primary-100 dark:hover:bg-zinc-700 dark:bg-zinc-900',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	}
);

export function Button({ variant, className, ...props }: Props) {
	return (
		<button
			tabIndex={0}
			className={tailwindMerge(buttonStyles({ variant }), className)}
			{...props}
		/>
	);
}
