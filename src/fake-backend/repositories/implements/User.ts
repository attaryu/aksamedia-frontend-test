import type { IUpdateUser, IUser } from '@/fake-backend/entities/user';
import type { IUserRepository } from '../User';
import type { ILocalStorage } from '@/fake-backend/storages/LocalStorage';

export class UserRepository implements IUserRepository {
	constructor(private _localStorage: ILocalStorage) {}

	getUser(): IUser {
		const data = this._localStorage.getItem();
		return data.user;
	}

	updateUser(newUser: IUpdateUser): IUser {
		const { user, ...rest } = this._localStorage.getItem();

		const updatedUser = {
			...user,
			...newUser,
		};

		this._localStorage.setItem({
			...rest,
			user: updatedUser,
		});

		return updatedUser;
	}
}
