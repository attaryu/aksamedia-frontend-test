'use client';

import type { FormEvent } from 'react';

import type { INote } from '@/fake-backend/entities/note';

import { parseAsBoolean, useQueryState } from 'nuqs';
import { useCallback, useRef, useState } from 'react';

import { Controller } from './Controller';

type Props = {
	note?: INote;
};

export function NoteForm({ note }: Props) {
	const [isEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(!note)
	);

	const [title, setTitle] = useState(note?.title ?? '');
	const [content, setContent] = useState(note?.content ?? '');

	const contentRef = useRef<HTMLTextAreaElement>(null);

	const inputChangeHandler = useCallback(
		(fn: (value: string) => void) => (event: FormEvent<HTMLTextAreaElement>) =>
			fn(event.currentTarget.value ?? ''),
		[]
	);

	return (
		<form className="flex flex-col gap-4 pb-20">
			<textarea
				placeholder="Title"
				className="w-full text-black outline-none text-xl font-semibold field-sizing-content dark:text-zinc-100"
				disabled={!isEditMode}
				required
				maxLength={150}
				onInput={inputChangeHandler(setTitle)}
				value={title}
			/>

			<textarea
				placeholder="Write something here..."
				className="w-full text-zinc-800 outline-none field-sizing-content dark:text-zinc-300"
				disabled={!isEditMode}
				required
				maxLength={2500}
				onInput={inputChangeHandler(setContent)}
				value={content}
				ref={contentRef}
			/>

			<Controller
				title={note?.title}
				content={note?.content}
				setTitle={setTitle}
				setContent={setContent}
				contentRef={contentRef}
			/>
		</form>
	);
}
