'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';

import { MasonryGrid } from '@/components/Masonry';
import { NoteCard } from '@/components/NoteCard';
import { PaginationController } from '@/components/PaginationController';
import { Searchbar } from '@/components/Searchbar';
import { Text } from '@/components/Text';

import { useUserStore } from '@/stores/user';

import { paginationNoteDummy } from '@/fake-backend';

export default function Grid() {
	const userStore = useUserStore();

	return (
		<>
			<div className="space-y-12 px-4 pb-4 pt-12">
				<section className="space-y-2">
					<Text tag="h1">Welcome, {userStore.user.shortName}!</Text>

					<Text tag="p">
						Here are your notes. You can edit or delete them as needed.
					</Text>
				</section>

				<section className="space-y-6">
					<Searchbar placeholder="Search by title" />

					{paginationNoteDummy.data.length ? (
						<MasonryGrid.Container>
							{paginationNoteDummy.data.map((note) => (
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

			<div className="fixed bottom-4 left-4 shadow-xl dark:shadow-zinc-100/5">
				<PaginationController
					totalPages={paginationNoteDummy.pagination.totalPage}
				/>
			</div>

			<Link
				href="/notes/create"
				className="bg-primary-300 text-white dark:bg-zinc-100 dark:text-zinc-900 p-3 fixed right-4 bottom-4 rounded-full shadow-xl dark:shadow-zinc-100/10"
			>
				<Plus />
			</Link>
		</>
	);
}
