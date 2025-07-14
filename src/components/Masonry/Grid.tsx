'use client';

import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

import { tailwindMerge } from '@/utils/tailwindMerge';
import { Text } from '../Text';

interface Props {
	className?: string;
	children: React.ReactNode;
	dependency?: unknown[];
}

/**
 * MasonryContainer component to create a responsive masonry grid layout.
 *
 * @param props.className Additional class names for styling.
 * @param props.children The child elements to be displayed in the masonry grid.
 * @param props.dependency An array of dependencies that triggers the recalculation of the masonry grid layout when changed.
 */
export function MasonryContainer({
	dependency = [],
	className,
	children,
}: Props) {
	const [isLoading, setLoading] = useState(true);
	const containerRef = useRef<HTMLUListElement | null>(null);

	const calculateMasonryGrid = debounce(
		useCallback(() => {
			/**
			 * get all direct items of the masonry container
			 */
			const items =
				containerRef.current?.querySelectorAll<HTMLLIElement>('.masonry-item');

			if (containerRef.current && items && items.length > 0) {
				setLoading(true);

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

				items.forEach((item) => {
					item.style.overflow = 'visible';
				});

				setLoading(false);
			}
		}, []),
		200
	);

	useEffect(() => {
		calculateMasonryGrid(); // initial calculation

		window.addEventListener('resize', calculateMasonryGrid);

		return () => {
			window.removeEventListener('resize', calculateMasonryGrid);
		};
	}, [calculateMasonryGrid, dependency]);

	return (
		<ul
			className={tailwindMerge(
				`masonry-grid grid group grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[0px]`,
				className
			)}
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
