'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { parseAsInteger, useQueryState } from 'nuqs';
import { useMemo } from 'react';
import { Dropdown } from '../Dropdown';
import { PaginationButton } from './PaginationButton';

type Props = {
	activePage: number;
	totalPages: number;
};

export function PaginationController({ activePage, totalPages }: Props) {
	const [page, setPage] = useQueryState(
		'page',
		parseAsInteger.withDefault(activePage)
	);

	const totalPagesArray = useMemo(
		() => Array.from({ length: totalPages }, (_, i) => i + 1),
		[totalPages]
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
				<ChevronLeft size={20} />
			</PaginationButton>

			<PaginationButton active>{page}</PaginationButton>

			<PaginationButton
				onClick={nextPageHandler}
				disabled={page === totalPages}
			>
				<ChevronRight size={20} />
			</PaginationButton>

			<Dropdown
				items={totalPagesArray.map((page) => ({
					type: 'button',
					title: page.toString(),
					onClick: () => setPage(page),
				}))}
			/>
		</div>
	);
}
