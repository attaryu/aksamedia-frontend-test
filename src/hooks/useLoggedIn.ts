'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useUserStore } from '@/stores/user';

export function useLoggedIn() {
	const userStore = useUserStore();
	const router = useRouter();

	useEffect(() => {
		if (!userStore.user.loggedIn) {
			router.push('/login');
		}
	}, [router, userStore.user.loggedIn]);
}
