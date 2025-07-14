'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { useMemo } from 'react';

import { MasonryGrid } from '@/components/Masonry';
import { NoteCard } from '@/components/NoteCard';
import { PaginationController } from '@/components/PaginationController';
import { Searchbar } from '@/components/Searchbar';
import { Text } from '@/components/Text';

import { useHydrationLoading } from '@/stores/loading';
import { useNoteStore } from '@/stores/note';
import { useUserStore } from '@/stores/user';

import { useLoggedIn } from '@/hooks/useLoggedIn';

export default function Grid() {
	useLoggedIn();

	const [page] = useQueryState('page', parseAsInteger.withDefault(1));
	const [search] = useQueryState('search', parseAsString.withDefault(''));
	const userStore = useUserStore();
	const noteStore = useNoteStore();
	const { isLoading } = useHydrationLoading();

	const paginationNotes = useMemo(
		() => noteStore.getNotes({ page, search }),
		[noteStore, page, search]
	);

	if (isLoading) {
		return (
			<div className="h-[60dvh] grid place-items-center">
				<Text className="text-center">Loading...</Text>
			</div>
		);
	}

	return (
		<>
			<div className="space-y-12 container-px pt-12 pb-24">
				<section className="space-y-2">
					<Text tag="h1">Welcome, {userStore.user.shortName}!</Text>

					<Text tag="p">
						Here are your Nnotes. You can edit or delete them as needed.
					</Text>
				</section>

				<section className="space-y-6">
					<Searchbar placeholder="Search by title" />

					{paginationNotes.data.length ? (
						<MasonryGrid.Container dependency={[page, search]}>
							{paginationNotes.data.map((note) => (
								<MasonryGrid.Item key={note.id} className="masonry-item">
									<NoteCard data={note} />
								</MasonryGrid.Item>
							))}
						</MasonryGrid.Container>
					) : (
						<div className="h-[35dvh] grid place-items-center">
							<Text className="text-center">No notes found.</Text>
						</div>
					)}
				</section>
			</div>

			<div className="fixed bottom-4 container-width inset-x-0 flex justify-between items-center gap-4 container-px">
				<div className=" shadow-xl dark:shadow-zinc-100/5">
					<PaginationController
						totalPages={paginationNotes.pagination.totalPage}
					/>
				</div>

				<Link
					href="/notes/create"
					className="bg-primary-300 text-white dark:bg-zinc-100 dark:text-zinc-900 p-3  rounded-full shadow-xl dark:shadow-zinc-100/10"
				>
					<Plus />
				</Link>
			</div>
		</>
	);
}
