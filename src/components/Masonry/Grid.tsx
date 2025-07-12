'use client';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { useCallback, useEffect, useRef, useState } from 'react';

import { tailwindMerge } from '@/utils/tailwindMerge';
import { Text } from '../Text';

/**
 * MasonryContainer component to create a responsive masonry grid layout.
 */
export function MasonryContainer({
	className,
	children,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
	const [isLoading, setLoading] = useState(true);
	const containerRef = useRef<HTMLUListElement | null>(null);

	const calculateMasonryGrid = useCallback(() => {
		/**
		 * get all direct items of the masonry container
		 */
		const items =
			containerRef.current?.querySelectorAll<HTMLLIElement>('.masonry-item');

		if (containerRef.current && items && items.length > 0) {
			for (const item of items) {
				const grid = window.getComputedStyle(containerRef.current!);
				/**
				 * actual element that the height is depend on custom element
				 */
				const actualItem = item.querySelector(
					'.actual-masonry-item'
				) as HTMLDivElement;

				const rowGap = parseInt(grid.gap);
				const rowHeight = parseInt(grid.gridAutoRows);
				const actualHeight = actualItem.getBoundingClientRect().height;

				/**
				 * @see https://w3bits.com/css-grid-masonry/
				 */
				const rowSpan = Math.ceil(
					(actualHeight + rowGap) / (rowGap + rowHeight)
				);

				/**
				 * Set the row span for the item based on its height
				 */
				item.style.gridRowEnd = `span ${rowSpan}`;
			}

			setLoading(false);
		}
	}, []);

	useEffect(() => {
		setLoading(true);
		calculateMasonryGrid(); // initial calculation

		window.addEventListener('resize', calculateMasonryGrid);

		return () => {
			window.removeEventListener('resize', calculateMasonryGrid);
		};
	}, [calculateMasonryGrid]);

	return (
		<ul
			{...props}
			className={tailwindMerge(
				`masonry-grid grid group grid-cols-2 gap-4 auto-rows-[0px]`,
				className
			)}
			/**
			 * data-loading attribute to indicate loading state for children
			 */
			data-loading={isLoading ? 'true' : 'false'}
			ref={containerRef}
		>
			{isLoading && (
				<div className="col-span-2 grid place-items-center">
					<Text className="text-center">Loading...</Text>
				</div>
			)}
			{children}
		</ul>
	);
}
