export interface IUser {
	username: string;
	fullName: string;
	shortName: string;
	email: string;
	password: string;
	loggedIn?: boolean;
}

export type IUpdateUser = Partial<Omit<IUser, 'loggedIn'>>;
