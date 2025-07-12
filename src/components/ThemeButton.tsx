'use client';

import { Moon, Sun, TvMinimal } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { Button } from './Button';

type Theme = 'light' | 'dark' | 'system';

const KEY = 'theme';

export function ThemeButton() {
	const [theme, setTheme] = useState<Theme>('system');

	const setHTMLClass = useCallback((theme: Theme) => {
		if (theme === 'system') {
			document.documentElement.className = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
				? 'dark'
				: 'light';
			return;
		}

		document.documentElement.className = theme;
	}, []);

	const toggleTheme = useCallback(() => {
		const newTheme =
			theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';

		setTheme(newTheme);
		localStorage.setItem(KEY, newTheme);

		setHTMLClass(newTheme);
	}, [theme, setHTMLClass]);

	useEffect(() => {
		const storedThemePreference = localStorage.getItem(KEY) as Theme | null;

		if (storedThemePreference) {
			setTheme(storedThemePreference);
			setHTMLClass(storedThemePreference);
		}
	}, [setHTMLClass]);

	return (
		<Button onClick={toggleTheme} variant="secondary" className="p-2.5">
			{theme === 'light' && <Sun className="w-5 h-5" />}
			{theme === 'dark' && <Moon className="w-5 h-5" />}
			{theme === 'system' && <TvMinimal className="w-5 h-5" />}
		</Button>
	);
}
