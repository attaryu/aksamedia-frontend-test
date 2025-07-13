import type { Metadata } from 'next';

import { NoteForm } from '../NoteForm';

export const metadata: Metadata = {
	title: 'Create Note',
};

export default function CreateNotePage() {
	return (
		<main className="p-4">
			<NoteForm />
		</main>
	);
}
