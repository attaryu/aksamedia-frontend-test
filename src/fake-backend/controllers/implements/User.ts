import { IUser } from '@/fake-backend/entities/user';
import type { IUserRepository } from '@/fake-backend/repositories/User';
import type { IUserController } from '../User';

export class UserController implements IUserController {
	constructor(private _userRepository: IUserRepository) {}

	loginUser(email: string, password: string): true | string {
		const user = this._userRepository.getUser();

		if (user.email !== email) {
			return 'Email does not match';
		}

		if (user.password !== password) {
			return 'Password does not match';
		}

		const updatedUser = this._userRepository.updateUser({
			loggedIn: true,
		});

		return updatedUser.loggedIn ? true : 'Login failed';
	}

	logoutUser(): void {
		this._userRepository.updateUser({
			loggedIn: false,
		});
	}

	getUser(): IUser {
		return this._userRepository.getUser();
	}

	userSessionCheck(): boolean {
		const user = this.getUser();
		return user.loggedIn === true;
	}
}
