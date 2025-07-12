'use client';

import { Menu } from 'lucide-react';

import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button } from './Button';

type DropdownLinkItem = {
	type: 'link';
	href: string;
	title: string;
};

type DropdownButtonItem = {
	type: 'button';
	onClick: () => void;
	title: string;
};

type DropdownItem = DropdownLinkItem | DropdownButtonItem;

type Props = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	placeholder?: string;
	items: DropdownItem[];
};

export function Dropdown({ onOpenChange, open, placeholder, items }: Props) {
	const [isOpen, setOpen] = useState(open || false);

	const handleOpenChange = useCallback(() => {
		const newOpenState = !isOpen;

		setOpen(newOpenState);

		if (onOpenChange) {
			onOpenChange(newOpenState);
		}

		if (newOpenState) {
			document.body.style.height = '100vh';
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.height = '';
			document.body.style.overflow = '';
		}
	}, [isOpen, onOpenChange]);

	return (
		<div className="relative">
			<Button
				onClick={handleOpenChange}
				variant="secondary"
				className="bg-white p-2 dark:bg-transparent"
			>
				{placeholder ?? <Menu />}
			</Button>

			{isOpen && (
				<div className="absolute right-0 mt-2 max-w-48 bg-white border border-zinc-300 rounded-lg shadow-lg flex flex-col">
					{items.map((item) =>
						item.type === 'link' ? (
							<Link
								href={item.href}
								key={item.href}
								onClick={handleOpenChange}
								className="py-2 px-3"
							>
								{item.title}
							</Link>
						) : (
							<button
								onClick={item.onClick}
								key={item.title}
								className="py-2 px-3"
							>
								{item.title}
							</button>
						)
					)}
				</div>
			)}
		</div>
	);
}
