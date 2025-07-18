'use client';

import { Loading } from '@/components/Loading';
import { Text } from '@/components/Text';
import { NoteForm } from '../NoteForm';

import { useHydrationLoading } from '@/stores/loading';
import { useNoteStore } from '@/stores/note';

type Props = {
	id: string;
};

export function Note({ id }: Props) {
	const noteStore = useNoteStore();
	const { isLoading } = useHydrationLoading();
	const note = noteStore.getNote(id);

	if (isLoading) {
		return <Loading />;
	}

	if (!note) {
		return (
			<div className="h-[60dvh] flex flex-col container-px items-center justify-center gap-4">
				<Text styling="h3">Note not found</Text>

				<Text tag="p" className="text-center">
					The note you are looking for does not exist or has been deleted.
				</Text>
			</div>
		);
	}

	return <NoteForm note={note} />;
}
