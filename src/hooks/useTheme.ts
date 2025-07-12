import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const KEY = 'theme';

export function useTheme(value: Theme = 'system') {
	const [_theme, _setTheme] = useState<Theme>(value);

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

	const setCache = useCallback(
		(theme: Theme) => localStorage.setItem(KEY, theme),
		[]
	);

	const toggleTheme = useCallback(() => {
		const newTheme =
			_theme === 'light' ? 'dark' : _theme === 'dark' ? 'system' : 'light';

		_setTheme(newTheme);
		setCache(newTheme);
		setHTMLClass(newTheme);
	}, [_theme, setHTMLClass, setCache]);

	const setTheme = useCallback(
		(value: Theme) => {
			_setTheme(value);
			setCache(value);
			setHTMLClass(value);
		},
		[setCache, setHTMLClass]
	);

	useEffect(() => {
		const storedThemePreference = localStorage.getItem(KEY) as Theme | null;

		if (storedThemePreference) {
			_setTheme(storedThemePreference);
			setHTMLClass(storedThemePreference);
		}
	}, [setHTMLClass]);

	return { theme: _theme, toggleTheme, setTheme };
}
