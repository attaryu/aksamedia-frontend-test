import { INote } from '../entities/note';
import { IUser } from '../entities/user';

export type DocumentSchema = {
	user: IUser;
	notes: INote[];
};

export interface ILocalStorage {
	getItem(): DocumentSchema;
	setItem(value: DocumentSchema): void;
	reset(): void;
}
