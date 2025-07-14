'use client';

import { parseAsBoolean, useQueryState } from 'nuqs';
import { FormEvent, useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Loading } from '@/components/Loading';

import { useHydrationLoading } from '@/stores/loading';
import { useUserStore } from '@/stores/user';

import { useLoggedIn } from '@/hooks/useLoggedIn';

export default function Form() {
	useLoggedIn();

	const userStore = useUserStore();
	const [user, setUser] = useState(userStore.user);
	const { isLoading } = useHydrationLoading();
	const [isEditMode, setEditMode] = useQueryState<boolean>(
		'edit',
		parseAsBoolean.withDefault(false)
	);

	const toggleEditMode = () => {
		const editMode = !isEditMode;
		setEditMode(editMode);

		if (!editMode) {
			setUser(userStore.user);
		}
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const submiHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isEditMode) {
			userStore.updateUser(user);
			setEditMode(false);
		}
	};

	useEffect(() => {
		setUser(userStore.user);
	}, [userStore.user]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<form className="space-y-8" onSubmit={submiHandler}>
			<div className="space-y-4">
				<Input
					type="text"
					name="fullName"
					placeholder="Fullname"
					disabled={!isEditMode}
					className="w-full"
					value={user.fullName}
					onChange={changeHandler}
					maxLength={50}
					required
				/>

				<Input
					type="text"
					name="shortName"
					placeholder="Short Name"
					disabled={!isEditMode}
					className="w-full"
					value={user.shortName}
					onChange={changeHandler}
					maxLength={6}
					required
				/>

				<Input
					type="text"
					name="username"
					placeholder="Username"
					disabled={!isEditMode}
					className="w-full"
					value={user.username}
					onChange={changeHandler}
					maxLength={20}
					required
				/>

				<Input
					type="email"
					name="email"
					placeholder="Email"
					disabled={!isEditMode}
					className="w-full"
					value={user.email}
					onChange={changeHandler}
					maxLength={50}
					required
				/>

				<Input
					type="password"
					name="password"
					placeholder="Password"
					disabled={!isEditMode}
					className="w-full"
					value={user.password}
					onChange={changeHandler}
					required
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
