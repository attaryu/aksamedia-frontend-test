'use client';

import type { FormEvent } from 'react';

import type { INote } from '@/types/note';

import { useRouter } from 'next/navigation';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useRef, useState } from 'react';

import { Controller } from './Controller';

import { useNoteStore } from '@/stores/note';

import { useLoggedIn } from '@/hooks/useLoggedIn';

type Props = {
	note?: INote;
};

/**
 * NoteForm component for creating, viewing details, and editing notes.
 *
 * @param props.note The note to edit or view.
 */
export function NoteForm({ note }: Props) {
	useLoggedIn();

	const [title, setTitle] = useState<string>(note?.title ?? '');
	const [content, setContent] = useState<string>(note?.content ?? '');
	const contentRef = useRef<HTMLTextAreaElement>(null);
	const noteStore = useNoteStore();
	const router = useRouter();
	const [isEditMode, setEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(!note) // if no note is provided, default to edit mode for creating a new note
	);

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;

		/**
		 * If a note is provided, update it; otherwise, create a new note.
		 */
		if (note) {
			noteStore.updateNote(note.id, { title, content });
			setEditMode(false);
		} else {
			const { id } = noteStore.createNote({ title, content });
			router.push(`/notes/${id}`);
		}
	};

	/**
	 * Reset the form fields to the original note values if available.
	 */
	const onResetHandler = () => {
		setTitle(note?.title ?? '');
		setContent(note?.content ?? '');
	};

	return (
		<form
			className="flex flex-col gap-6 pb-20 md:gap-8 mt-6"
			onSubmit={onSubmitHandler}
		>
			<textarea
				name="title"
				placeholder="Title"
				className="w-full text-black outline-none text-2xl font-semibold field-sizing-content dark:text-zinc-100 resize-none"
				disabled={note && !isEditMode}
				required
				maxLength={150}
				onChange={(e) => setTitle(e.currentTarget.value)}
				value={title}
			/>

			<textarea
				name="content"
				placeholder="Write something here..."
				className="w-full text-zinc-800 outline-none field-sizing-content dark:text-zinc-300  resize-none"
				disabled={note && !isEditMode}
				required
				maxLength={2500}
				onChange={(e) => setContent(e.currentTarget.value)}
				value={content}
				ref={contentRef}
			/>

			<Controller
				noteId={note?.id}
				contentRef={contentRef}
				resetHandler={onResetHandler}
			/>
		</form>
	);
}
