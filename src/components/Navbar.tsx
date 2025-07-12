'use client';

import Link from 'next/link';

import { Button } from './Button';
import { ThemeButton } from './ThemeButton';

export function Navbar() {
	return (
		<nav className="flex bg-primary-300 dark:bg-zinc-900 fixed top-0 inset-x-0 p-4 items-center justify-between">
			<p className="font-bold text-white text-xl">Noto</p>

			<div className="flex gap-2">
				<ThemeButton />

				<Button variant="secondary">
					<Link href="/login">Login</Link>
				</Button>
			</div>
		</nav>
	);
}
