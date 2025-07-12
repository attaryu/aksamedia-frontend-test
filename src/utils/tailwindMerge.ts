import type { ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export const tailwindMerge = (...classes: ClassValue[]) =>
	twMerge(clsx(...classes));
