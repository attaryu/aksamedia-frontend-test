'use client';

import { EllipsisVertical, Menu } from 'lucide-react';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

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

/**
 * Dropdown component that displays a button to toggle the dropdown menu.
 * The dropdown can contain links or buttons.
 */
export function Dropdown({ onOpenChange, open, placeholder, items }: Props) {
	const [isOpen, setOpen] = useState(open || false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleOpenChange = useCallback(() => {
		const newOpenState = !isOpen;

		setOpen(newOpenState);

		if (onOpenChange) {
			onOpenChange(newOpenState);
		}

		/**
		 * Prevent body scroll when dropdown is open.
		 */
		if (newOpenState) {
			document.body.style.height = '100vh';
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.height = '';
			document.body.style.overflow = '';
		}
	}, [isOpen, onOpenChange]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (
				isOpen &&
				buttonRef.current &&
				!buttonRef.current.contains(target) && // check if the click is outside the button
				!target.closest('.dropdown-menu') // check if the click is outside the dropdown menu
			) {
				handleOpenChange();
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleOpenChange]);

	return (
		<div className="relative">
			<Button
				ref={buttonRef}
				onClick={handleOpenChange}
				variant="secondary"
				className="bg-white p-2 gap-2 dark:bg-transparent"
			>
				{placeholder ? (
					<>
						{placeholder}
						<EllipsisVertical size={18} />
					</>
				) : (
					<Menu />
				)}
			</Button>

			{isOpen && (
				<div className="dropdown-menu absolute right-0 mt-2 max-w-48 bg-white border border-zinc-300 rounded-lg shadow-lg flex flex-col dark:bg-zinc-900 dark:border-zinc-700 dark:text-white">
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
