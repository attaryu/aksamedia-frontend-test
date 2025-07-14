'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useUserStore } from '@/stores/user';

/**
 * Custom hook to ensure the user is logged in.
 */
export function useLoggedIn() {
	const userStore = useUserStore();
	const router = useRouter();

	useEffect(() => {
		if (!userStore.user.loggedIn) {
			router.push('/login');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
