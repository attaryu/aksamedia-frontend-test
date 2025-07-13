import type { IUpdateUser, IUser } from '../entities/user';

export interface IUserRepository {
	getUser(): IUser;
	updateUser(newUser: IUpdateUser): IUser;
}
