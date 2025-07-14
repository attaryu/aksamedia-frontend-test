import type { INote } from '@/types/note';

import Link from 'next/link';

import { Text } from './Text';
import { Time } from './Time';

type Props = {
	data: INote;
};

export function NoteCard({ data }: Props) {
	return (
		<section className="outline outline-primary-300 dark:outline-zinc-600 relative rounded-xl p-4 space-y-4 hover:shadow-xl transition-all hover:shadow-primary-300/20 hover:-translate-y-1 dark:hover:outline-primary-200 dark:hover:shadow-primary-300/15">
			<Text tag="h2" styling="h3" className="line-clamp-2">
				<Link
					href={`/notes/${data.id}`}
					className="before:content-[''] before:absolute before:inset-0 before:block"
				>
					{data.title}
				</Link>
			</Text>

			<Text className="line-clamp-[8]">{data.content}</Text>

			<Time className="pt-4">{data.updatedAt}</Time>
		</section>
	);
}
