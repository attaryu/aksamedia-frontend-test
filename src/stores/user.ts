import { IUpdateUser, IUser } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IUserStore {
	user: IUser;
	loginUser: (email: string, password: string) => string | true;
	logoutUser: () => void;
	updateUser: (user: IUpdateUser) => void;
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
			updateUser: (user: IUpdateUser) => {
				set((state) => ({
					...state,
					user: { ...state.user, ...user },
				}));
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
		}
	)
);
