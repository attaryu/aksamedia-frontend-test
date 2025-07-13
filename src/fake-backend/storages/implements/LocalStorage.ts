import { DocumentSchema, ILocalStorage } from '../LocalStorage';

export class LocalStorage implements ILocalStorage {
	private _storage = window.localStorage;
	private _key = 'NOTO_DATA';

	constructor(private _defaultData: DocumentSchema) {}

	getItem(): DocumentSchema {
		const data = this._storage.getItem(this._key);
		return data ? (JSON.parse(data) as DocumentSchema) : this._defaultData;
	}

	setItem(value: DocumentSchema): void {
		this._storage.setItem(this._key, JSON.stringify(value));
	}

	reset(): void {
		this._storage.removeItem(this._key);
	}
}
