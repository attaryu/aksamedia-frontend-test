import type { ICreateNote, INote, IUpdateNote } from '@/types/note';
import type { IPaginationResponse } from '@/types/paginationResponse';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Filter = {
	search?: string;
	page?: number;
};

export interface INoteStore {
	notes: INote[];
	getNotes(filter: Filter): IPaginationResponse<INote>;
	getNote(id: string): INote | undefined;
	createNote(note: ICreateNote): INote;
	updateNote(id: string, note: IUpdateNote): INote;
	deleteNote(id: string): void;
}

export const useNoteStore = create<INoteStore>()(
	persist(
		(set, get) => ({
			notes: [],
			getNotes: (filter) => {
				const { notes } = get();
				const { search, page = 1 } = filter;

				const filteredNotes = notes.filter(({ title }) =>
					title.toLowerCase().includes(search?.toLowerCase() ?? '')
				);

				const itemPerPage = 10;
				const totalPage = Math.ceil(filteredNotes.length / itemPerPage);
				const paginatedNotes = filteredNotes.slice(
					(page - 1) * itemPerPage,
					page * itemPerPage
				);

				return {
					data: paginatedNotes,
					pagination: {
						currentPage: page,
						itemPerPage,
						totalPage,
					},
				};
			},
			getNote: (id) => get().notes.find((note) => note.id === id),
			createNote: (note) => {
				const now = new Date().toISOString();
				const newNote = {
					...note,
					id: crypto.randomUUID(),
					createdAt: now,
					updatedAt: now,
				};

				set((state) => ({
					notes: [...state.notes, newNote],
				}));

				return newNote;
			},
			updateNote: (id, note) => {
				set((state) => {
					const notes = state.notes.map((existingNote) =>
						existingNote.id === id
							? {
									...existingNote,
									...note,
									updatedAt: new Date().toISOString(),
							  }
							: existingNote
					);

					return { notes };
				});

				return get().getNote(id)!;
			},
			deleteNote: (id) =>
				set((state) => ({
					notes: state.notes.filter((note) => note.id !== id),
				})),
		}),
		{
			name: 'NOTO_NOTES',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
