import type { Metadata } from 'next';

import { NoteForm } from '../NoteForm';

export const metadata: Metadata = {
	title: 'Create Note',
};

export default function CreateNotePage() {
	return (
		<main className="container-px">
			<NoteForm />
		</main>
	);
}
