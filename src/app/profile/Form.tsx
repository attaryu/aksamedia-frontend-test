'use client';

import type { IUser } from '@/fake-backend/entities/user';

import { parseAsBoolean, useQueryState } from 'nuqs';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

const dummyUser: IUser = {
	username: 'john_doe',
	fullName: 'John Doe',
	email: 'johndoe@mail.com',
	password: 'password',
};

export default function Form() {
	const [isEditMode, setEditMode] = useQueryState<boolean>('edit', {
		defaultValue: false,
		parse: parseAsBoolean.parse,
	});

	const toggleEditMode = () => {
		setEditMode((prev) => !prev);
	};

	return (
		<form className="space-y-8">
			<div className="space-y-4">
				<Input
					type="text"
          name="fullName"
					placeholder="Fullname"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={dummyUser.fullName}
				/>

				<Input
					type="text"
          name="username"
					placeholder="Username"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={dummyUser.username}
				/>

				<Input
					type="email"
          name="email"
					placeholder="Email"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={dummyUser.email}
				/>

				<Input
					type="password"
          name="password"
					placeholder="Password"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={dummyUser.password}
				/>
			</div>

			<div className="flex gap-2">
				{isEditMode ? (
					<>
						<Button
							type="button"
							className="w-full"
							variant="secondary"
							onClick={toggleEditMode}
						>
							Cancel
						</Button>

						<Button type="submit" className="w-full">
							Submit
						</Button>
					</>
				) : (
					<Button
						type="button"
						className="w-full"
						variant="secondary"
						onClick={toggleEditMode}
					>
						Edit
					</Button>
				)}
			</div>
		</form>
	);
}
