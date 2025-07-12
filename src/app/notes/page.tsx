import type { Metadata } from 'next';

import Grid from './Grid';

export const metadata: Metadata = {
	title: 'Notes',
};

export default function NotesPage() {
	return (
		<main>
			<Grid />
		</main>
	);
}
