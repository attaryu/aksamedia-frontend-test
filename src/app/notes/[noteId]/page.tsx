import type { Metadata, Viewport } from 'next';

import { Note } from './Note';

type Props = {
	params: Promise<{ noteId: string }>;
};

export const metadata: Metadata = {
	title: 'Note',
};

export const viewport: Viewport = {
	interactiveWidget: 'resizes-content',
};

export default async function NotePage({ params }: Props) {
	const { noteId } = await params;

	return (
		<main className="p-4">
			<Note id={noteId} />
		</main>
	);
}
