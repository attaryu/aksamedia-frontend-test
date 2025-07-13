'use client';

import { parseAsBoolean, useQueryState } from 'nuqs';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { useUserStore } from '@/stores/user';

export default function Form() {
	const [isEditMode, setEditMode] = useQueryState<boolean>('edit', {
		defaultValue: false,
		parse: parseAsBoolean.parse,
	});

	const userStore = useUserStore();

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
					defaultValue={userStore.user.fullName}
				/>

				<Input
					type="text"
					name="surname"
					placeholder="Short Name"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={userStore.user.shortName}
				/>

				<Input
					type="text"
					name="username"
					placeholder="Username"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={userStore.user.username}
				/>

				<Input
					type="email"
					name="email"
					placeholder="Email"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={userStore.user.email}
				/>

				<Input
					type="password"
					name="password"
					placeholder="Password"
					disabled={!isEditMode}
					className="w-full"
					defaultValue={userStore.user.password}
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
