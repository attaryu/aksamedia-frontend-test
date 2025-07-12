import type { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { tailwindMerge } from '@/utils/tailwindMerge';

/**
 * MasonryItem component represents an individual item in a masonry grid layout.
 */
export function MasonryItem({
	className,
	children,
	...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) {
	return (
		<li
			/**
			 * group-[[data-loading=true]] is used to hide the item when the container's loading 
			 * state is true
			 */
			className={tailwindMerge(
				'masonry-item group-[[data-loading=true]]:invisible',
				className
			)}
			{...props}
		>
			{/* actual height based on its children */}
			<div className="actual-masonry-item">{children}</div>
		</li>
	);
}
