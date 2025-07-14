'use client';

import type { DropdownItem } from '../Dropdown';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { parseAsInteger, useQueryState } from 'nuqs';
import { useMemo } from 'react';

import { Dropdown } from '../Dropdown';
import { PaginationButton } from './PaginationButton';

type Props = {
	totalPages: number;
};

export function PaginationController({ totalPages }: Props) {
	const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

	const dropdownItem = useMemo(
		() =>
			Array.from({ length: totalPages }, (_, i) => i + 1).map(
				(_page): DropdownItem => ({
					type: 'button',
					title: _page.toString(),
					onClick: () => setPage(_page),
					variant: _page === page ? 'primary' : 'secondary',
				})
			),
		[page, setPage, totalPages]
	);

	function previousPageHandler() {
		if (page > 1) {
			setPage(page - 1);
		}
	}

	function nextPageHandler() {
		if (page < totalPages) {
			setPage(page + 1);
		}
	}

	return (
		<div className="flex bg-white p-1 border border-zinc-700 rounded-xl items-center gap-1 dark:bg-zinc-900 dark:border-zinc-500">
			<PaginationButton onClick={previousPageHandler} disabled={page === 1}>
				<ChevronLeft className="size-6" />
			</PaginationButton>

			<PaginationButton active>{page}</PaginationButton>

			<PaginationButton
				onClick={nextPageHandler}
				disabled={page === totalPages || totalPages === 0}
			>
				<ChevronRight className="size-6" />
			</PaginationButton>

			<Dropdown items={dropdownItem} />
		</div>
	);
}
