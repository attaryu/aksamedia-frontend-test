export type IUser = {
	username: string;
	fullName: string;
	email: string;
	password: string;
	loggedIn?: boolean;
};

export type IUpdateUser = Partial<Omit<IUser, 'loggedIn'>>;
