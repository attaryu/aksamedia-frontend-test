'use client';

import type { DropdownItem } from './Dropdown';

import { Moon, Sun, TvMinimal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';

import { useTheme } from '@/hooks/useTheme';

import { useUserStore } from '@/stores/user';

export function Navbar() {
	const router = useRouter();
	const { theme, toggleTheme } = useTheme('system');
	const userStore = useUserStore();

	/**
	 * Dropdown items based on user login status
	 */
	const dropdownItem = useMemo(
		(): DropdownItem[] =>
			userStore.user.loggedIn
				? [
						{ type: 'link', title: 'Home', href: '/' },
						{ type: 'link', title: 'Notes', href: '/notes' },
						{ type: 'link', title: 'Profile', href: '/profile' },
						{
							type: 'button',
							variant: 'secondary',
							title: 'Logout',
							onClick: () => {
								userStore.logoutUser();
								router.push('/login');
							},
						},
				  ]
				: [
						{ type: 'link', title: 'Home', href: '/' },
						{ type: 'link', title: 'Login', href: '/login' },
				  ],
		[router, userStore]
	);

	return (
		<nav className="z-50 bg-primary-300 min-h-16 dark:bg-zinc-800 grid place-items-center fixed top-0 inset-x-0">
			<div className="flex container-width w-full container-px items-center justify-between">
				<p className="font-bold text-white text-xl">Noto</p>

				<div className="flex gap-2">
					<Button
						onClick={toggleTheme}
						variant="secondary"
						className="p-2 bg-white"
					>
						{theme === 'light' && <Sun className="size-6 md:size-7" />}
						{theme === 'dark' && <Moon className="size-6 md:size-7" />}
						{theme === 'system' && <TvMinimal className="size-6 md:size-7" />}
					</Button>

					<Dropdown
						placeholder={
							userStore.user.loggedIn
								? `Hello, ${userStore.user.shortName}!`
								: undefined
						}
						items={dropdownItem}
					/>
				</div>
			</div>
		</nav>
	);
}
