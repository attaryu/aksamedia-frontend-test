'use client';

import { parseAsString, useQueryState } from 'nuqs';

import { Input } from './Input';

import { tailwindMerge } from '@/utils/tailwindMerge';

type Props = {
	placeholder?: string;
	className?: string;
};

export default function Searchbar({ className, placeholder }: Props) {
	const [searchQuery, setSearchQuery] = useQueryState(
		'search',
		parseAsString.withDefault('')
	);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	return (
		<Input
			type="text"
			className={tailwindMerge('w-full', className)}
			placeholder={placeholder ?? 'Search'}
			value={searchQuery}
			onChange={handleSearchChange}
		/>
	);
}
