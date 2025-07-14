import type { RefObject } from 'react';

import { Check, Pencil, Trash, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

import { useNoteStore } from '@/stores/note';

type Props = {
	noteId?: string;
	contentRef: RefObject<HTMLTextAreaElement | null>;
	resetHandler?: () => void;
};

export function Controller({ noteId, contentRef, resetHandler }: Props) {
	const noteStore = useNoteStore();
	const router = useRouter();
	const [deleteMeasurement, setDeleteMeasurement] = useState<boolean>(false);
	const [isEditMode, setEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(!noteId)
	);

	const handleDelete = () => {
		if (noteId) {
			noteStore.deleteNote(noteId);
			setDeleteMeasurement(false);
			router.push('/notes');
		}
	};

	const editModeToggler = () => setEditMode((prev) => !prev);

	const editModeSetter = () => {
		if (!isEditMode) {
			editModeToggler();

			// time out to ensure the textarea is focused after the state change
			setTimeout(() => {
				if (contentRef.current) {
					const contentLength = contentRef.current.value.length;

					contentRef.current.focus();
					contentRef.current.setSelectionRange(contentLength, contentLength);
				}
			}, 0);
		}
	};

	if (noteId) {
		return (
			<div className="fixed z-50 container-width bottom-4 right-0 container-px flex items-center gap-2 md:gap-4">
				{deleteMeasurement && (
					<>
						<Text
							tag="small"
							className="text-end text-xs md:text-sm mr-2 w-40 text-zinc-900 dark:text-zinc-300"
						>
							Are you sure to delete this note?
						</Text>

						<Button
							type="button"
							className="p-3 rounded-full"
							onClick={() => setDeleteMeasurement(false)}
						>
							<X className="size-6 md:size-7" />
						</Button>

						<Button
							type="button"
							className="p-3 rounded-full"
							variant="secondary"
							onClick={handleDelete}
						>
							<Check className="size-6 md:size-7" />
						</Button>
					</>
				)}

				{isEditMode && (
					<>
						<Button
							type="reset"
							variant="secondary"
							className="p-3 rounded-full"
							onClick={() => {
								editModeToggler();
								resetHandler?.();
							}}
						>
							<X className="size-6 md:size-7" />
						</Button>

						<Button type="submit" className="p-3 rounded-full">
							<Check className="size-6 md:size-7" />
						</Button>
					</>
				)}

				{!isEditMode && !deleteMeasurement && (
					<>
						<Button
							type="button"
							className="p-3 rounded-full"
							variant="secondary"
							onClick={() => setDeleteMeasurement(true)}
						>
							<Trash className="size-6 md:size-7" />
						</Button>

						<Button
							type="button"
							className="p-3 rounded-full"
							onClick={editModeSetter}
							variant="secondary"
						>
							<Pencil className="size-6 md:size-7" />
						</Button>
					</>
				)}
			</div>
		);
	}

	return (
		<div className="fixed z-50 container-width bottom-4 right-0 container-px flex items-center gap-2 md:gap-4">
			<Button
				type="reset"
				variant="secondary"
				className="p-3 rounded-full"
				onClick={editModeSetter}
			>
				<X className="size-6 md:size-7" />
			</Button>

			<Button type="submit" className="p-3 rounded-full">
				<Check className="size-6 md:size-7" />
			</Button>
		</div>
	);
}
