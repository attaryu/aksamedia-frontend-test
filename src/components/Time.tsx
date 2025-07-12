import dayjs from 'dayjs';

import { tailwindMerge } from '@/utils/tailwindMerge';

type Props = {
	className?: string;
	children: string;
};

export function Time({ className, children }: Props) {
	const formattedDate = dayjs(children).format('MMM D, YYYY h:mm A');

	return (
		<time
			dateTime={children}
			className={tailwindMerge('text-sm text-zinc-600 dark:text-zinc-400', className)}
		>
			{formattedDate}
		</time>
	);
}
