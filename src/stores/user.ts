import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IUser {
	username: string;
	fullName: string;
	shortName: string;
	email: string;
	password: string;
	loggedIn?: boolean;
}

export interface IUserStore {
	user: IUser;
	loginUser: (email: string, password: string) => string | true;
	logoutUser: () => void;
}

export const useUserStore = create<IUserStore>()(
	persist(
		(set, get) => ({
			user: {
				email: 'johndoe@example.com',
				fullName: 'John Doe',
				shortName: 'JD',
				username: 'john_doe',
				password: '12345678',
			},
			loginUser: (email, password) => {
				const { user } = get();

				if (user.email !== email || user.password !== password) {
					return 'Invalid email or password';
				}

				set((state) => ({ ...state, user: { ...state.user, loggedIn: true } }));

				return true;
			},
			logoutUser: () =>
				set((state) => ({
					...state,
					user: { ...state.user, loggedIn: false },
				})),
		}),
		{
			name: 'NOTO_USER',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
