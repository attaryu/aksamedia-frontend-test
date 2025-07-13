import type { RefObject } from 'react';

import { Check, Pencil, Trash, X } from 'lucide-react';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useCallback, useMemo, useState } from 'react';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

type Props = {
	title?: string;
	content?: string;
	contentRef: RefObject<HTMLTextAreaElement | null>;
	setTitle: (value: string) => void;
	setContent: (value: string) => void;
};

export function Controller({
	title,
	content,
	setTitle,
	setContent,
	contentRef,
}: Props) {
	const isDataExist = useMemo(
		() => Boolean(title && content),
		[title, content]
	);

	const [isEditMode, setEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(!isDataExist)
	);
	const [deleteMeasurement, setDeleteMeasurement] = useState<boolean>(false);

	const editModeToggler = useCallback(
		() => setEditMode((prev) => !prev),
		[setEditMode]
	);

	const editModeCanceler = useCallback(() => {
		setTitle(title ?? '');
		setContent(content ?? '');

		if (isDataExist) {
			setEditMode(false);
		}
	}, [content, isDataExist, setContent, setEditMode, setTitle, title]);

	const editModeSetter = useCallback(() => {
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
	}, [contentRef, editModeToggler, isEditMode]);

	if (isDataExist) {
		return (
			<div className="fixed bottom-4 right-4 flex items-center gap-2">
				{deleteMeasurement && (
					<>
						<Text
							tag="small"
							className="text-end text-xs mr-2 w-40 text-zinc-900 dark:text-zinc-300"
						>
							Are you sure you want to delete this note?
						</Text>

						<Button
							type="button"
							className="p-3 rounded-full"
							onClick={() => setDeleteMeasurement(false)}
						>
							<X size={24} />
						</Button>

						<Button
							type="button"
							className="p-3 rounded-full"
							variant="secondary"
						>
							<Check size={24} />
						</Button>
					</>
				)}

				{isEditMode && (
					<>
						<Button
							type="reset"
							variant="secondary"
							className="p-3 rounded-full"
							onClick={editModeCanceler}
						>
							<X size={24} />
						</Button>

						<Button type="submit" className="p-3 rounded-full">
							<Check size={24} />
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
							<Trash size={24} />
						</Button>

						<Button
							type="button"
							className="p-3 rounded-full"
							onClick={editModeSetter}
							variant="secondary"
						>
							<Pencil size={24} />
						</Button>
					</>
				)}
			</div>
		);
	}

	return (
		<div className="fixed bottom-4 right-4 flex items-center gap-2">
			<Button
				type="reset"
				variant="secondary"
				className="p-3 rounded-full"
				onClick={editModeCanceler}
			>
				<X size={24} />
			</Button>

			<Button type="submit" className="p-3 rounded-full">
				<Check size={24} />
			</Button>
		</div>
	);
}
