'use client';

import type { FormEvent } from 'react';

import type { INote } from '@/types/note';

import { useRouter } from 'next/navigation';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useRef, useState } from 'react';

import { Controller } from './Controller';

import { useNoteStore } from '@/stores/note';

type Props = {
	note?: INote;
};

export function NoteForm({ note }: Props) {
	const contentRef = useRef<HTMLTextAreaElement>(null);
	const noteStore = useNoteStore();
	const router = useRouter();
	const [isEditMode, setEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(!note)
	);

	const [title, setTitle] = useState<string>(note?.title ?? '');
	const [content, setContent] = useState<string>(note?.content ?? '');

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;

		if (note) {
			noteStore.updateNote(note.id, { title, content });
			setEditMode(false);
		} else {
			const { id } = noteStore.createNote({ title, content });
			router.push(`/notes/${id}`);
		}
	};

	const onResetHandler = () => {
		setTitle(note?.title ?? '');
		setContent(note?.content ?? '');
	};

	return (
		<form className="flex flex-col gap-4 pb-20" onSubmit={onSubmitHandler}>
			<textarea
				name="title"
				placeholder="Title"
				className="w-full text-black outline-none text-xl font-semibold field-sizing-content dark:text-zinc-100"
				disabled={!isEditMode}
				required
				maxLength={150}
				onChange={(e) => setTitle(e.currentTarget.value)}
				value={title}
			/>

			<textarea
				name="content"
				placeholder="Write something here..."
				className="w-full text-zinc-800 outline-none field-sizing-content dark:text-zinc-300"
				disabled={!isEditMode}
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
