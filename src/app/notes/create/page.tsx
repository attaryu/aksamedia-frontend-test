import type { Metadata } from 'next';

import CreateNote from './CreateNote';

export const metadata: Metadata = {
	title: 'Create Note',
};

export default function CreateNotePage() {
	return (
    <main className="p-4">
      <CreateNote />
    </main>
  );
}
