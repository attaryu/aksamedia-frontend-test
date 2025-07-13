export interface INote {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

export type ICreateNote = Pick<INote, 'title' | 'content'>;

export type IUpdateNote = Partial<ICreateNote>;
