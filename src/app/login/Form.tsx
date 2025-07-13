'use client';

import type { FormEvent } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';

import { useUserStore } from '@/stores/user';

export function Form() {
	const router = useRouter();
	const userStore = useUserStore();

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const response = userStore.loginUser(
			event.currentTarget.email.value,
			event.currentTarget.password.value
		);

		if (response === true) {
			alert('Login successful!');

			router.push('/notes');
		} else {
			alert(response ?? 'Login failed. Please try again.');
		}
	};

	return (
		<form className="space-y-10 w-full" onSubmit={submitHandler}>
			<div className="space-y-2">
				<Text tag="h1" styling="h2" className="">
					Login
				</Text>

				<Text className="">Please log in to continue.</Text>
			</div>

			<div className="flex flex-col gap-4">
				<Input
					type="email"
					name="email"
					placeholder="example@mail.com"
					required
				/>
				<Input
					type="password"
					name="password"
					placeholder="Your password..."
					required
				/>
			</div>

			<div className="flex gap-2 flex-row">
				<Button type="reset" variant="secondary" className="w-full">
					Reset
				</Button>

				<Button type="submit" className="w-full">
					Submit
				</Button>
			</div>
		</form>
	);
}
