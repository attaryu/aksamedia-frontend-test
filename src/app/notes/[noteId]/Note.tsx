'use client';

import { Text } from '@/components/Text';
import { NoteForm } from '../NoteForm';

import { noteDummy } from '@/fake-backend'; 

type Props = {
	id: string;
};

export function Note({ id }: Props) {
	const note = noteDummy.find((note) => note.id === id);

	if (!note) {
		return (
			<div className="h-[60dvh] flex flex-col items-center justify-center gap-4">
				<Text styling="h3">Note not found</Text>

				<Text tag="p" className="text-center">
					The note you are looking for does not exist or has been deleted.
				</Text>
			</div>
		);
	}

	return <NoteForm note={note} />;
}
