import { IUser } from '../entities/user';

export interface IUserController {
	loginUser: (email: string, password: string) => string | true;
	logoutUser: () => void;
	getUser: () => IUser;
	userSessionCheck: () => boolean;
}
