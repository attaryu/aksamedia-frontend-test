'use client';

import { NoteForm } from '../NoteForm';

import { noteDummy } from '../Grid';

type Props = {
	id: string;
};

export function Note({ id }: Props) {
	const note = noteDummy.find((note) => note.id === id);

	return <NoteForm note={note} />;
}
