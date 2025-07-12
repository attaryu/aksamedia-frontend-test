'use client';

import { Moon, Sun, TvMinimal } from 'lucide-react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';

import { useTheme } from '@/hooks/useTheme';

export function Navbar() {
	const { theme, toggleTheme } = useTheme('system');

	return (
		<nav className="flex bg-primary-300 min-h-20 dark:bg-zinc-900 fixed top-0 inset-x-0 px-4 items-center justify-between">
			<p className="font-bold text-white text-xl">Noto</p>

			<div className="flex gap-2">
				<Button
					onClick={toggleTheme}
					variant="secondary"
					className="p-2 bg-white dark:bg-transparent"
				>
					{theme === 'light' && <Sun />}
					{theme === 'dark' && <Moon />}
					{theme === 'system' && <TvMinimal />}
				</Button>

				<Dropdown
					placeholder="Hello, User!"
					items={[
						{ type: 'link', title: 'Home', href: '/' },
						{ type: 'link', title: 'Notes', href: '/notes' },
						{ type: 'link', title: 'Profiles', href: '/profile' },
						// { type: 'link', title: 'Login', href: '/login' },
					]}
				/>
			</div>
		</nav>
	);
}
