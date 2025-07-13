'use client';

import { parseAsString, useQueryState } from 'nuqs';

import { Input } from './Input';

import { tailwindMerge } from '@/utils/tailwindMerge';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

type Props = {
	placeholder?: string;
	className?: string;
};

export function Searchbar({ className, placeholder }: Props) {
	const [searchQuery, setSearchQuery] = useQueryState(
		'search',
		parseAsString.withDefault('')
	);
	const [search, setSearch] = useState(searchQuery);

	return (
		<div className="flex gap-2">
			<Input
				type="text"
				className={tailwindMerge('w-full py-2', className)}
				placeholder={placeholder ?? 'Search'}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						setSearchQuery(search);
					}
				}}
			/>

			<Button
				className="size-13 rounded-xl"
				variant="secondary"
				onClick={() => setSearchQuery(search)}
			>
				<Search />
			</Button>
		</div>
	);
}
