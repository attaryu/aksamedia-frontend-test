import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { tailwindMerge } from '@/utils/tailwindMerge';

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	type: 'text' | 'email' | 'password';
}

export function Input({ className, ...props }: Props) {
	return (
		<input
			{...props}
			className={tailwindMerge(
				'p-3 outline outline-zinc-500 dark:text-white dark:placeholder:text-zinc-600  dark:outline-zinc-600 rounded-xl focus:invalid:outline-red-400 focus:invalid:text-red-400 focus:valid:outline-primary-400 focus:valid:text-primary-400 dark:focus:valid:shadow-xl dark:focus:valid:shadow-primary-300/15 disabled:text-zinc-500 disabled:outline-zinc-200 dark:disabled:outline-zinc-700 disabled:dark:text-zinc-400',
				className
			)}
		/>
	);
}
