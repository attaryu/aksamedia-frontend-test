'use client';

import type { INote } from '@/fake-backend/entities/note';

import { Input } from '@/components/Input';
import { MasonryGrid } from '@/components/Masonry';
import { NoteCard } from '@/components/NoteCard';
import { Text } from '@/components/Text';

const noteDummy: INote[] = [
	{
		id: '1',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '3',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
];

export default function Grid() {
	return (
		<div className="space-y-12 px-4 pb-4 pt-12">
			<section className="space-y-2">
				<Text tag="h1">Welcome, Guest!</Text>

				<Text tag="p">
					Here are your notes. You can edit or delete them as needed.
				</Text>
			</section>

			<section className="space-y-6">
				<Input type="text" className="w-full" placeholder="Search by title" />

				<MasonryGrid.Container>
					{noteDummy.map((note) => (
						<MasonryGrid.Item key={note.id} className="masonry-item">
							<NoteCard data={note} />
						</MasonryGrid.Item>
					))}
				</MasonryGrid.Container>
			</section>
		</div>
	);
}
