import { MasonryContainer } from './Grid';
import { MasonryItem } from './Item';

/**
 * MasonryGrid is a utility for creating responsive masonry grid layouts.
 *
 * @example
 * ```tsx
 * import { MasonryGrid } from '@/components/Masonry';
 * 
 * <MasonryGrid.Container>
 * 	<MasonryGrid.Item>
 * 		<div className="h-48 bg-red-500"></div>
 * 	</MasonryGrid.Item>
 * </MasonryGrid.Container>
 * ```
 */
export const MasonryGrid = {
	/**
	 * Container component to create a responsive masonry grid layout.
	 */
	Container: MasonryContainer,
	/**
	 * Item component represents an individual item in a masonry grid layout.
	 */
	Item: MasonryItem,
};
