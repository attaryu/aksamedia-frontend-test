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
	variant: 'primary' | 'secondary';
};

export type DropdownItem = DropdownLinkItem | DropdownButtonItem;

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
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleOpenChange = useCallback(() => {
		const newOpenState = !isOpen;

		setOpen(newOpenState);
		onOpenChange?.(newOpenState);

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

	const itemClickHandler = useCallback(
		(fn: () => void) => () => {
			fn();
			handleOpenChange();
		},
		[handleOpenChange]
	);

	useEffect(() => {
		if (isOpen && buttonRef.current && dropdownRef.current) {
			const verticalCenter = window.innerHeight / 2;
			const horizontalLeft = window.innerWidth / 3;
			const horizontalCenter = horizontalLeft * 2;

			const buttonDimension = buttonRef.current.getBoundingClientRect();
			const dropdownDimension = dropdownRef.current.getBoundingClientRect();

			if (buttonDimension.top < verticalCenter) {
				dropdownRef.current.style.top = '100%';
			}

			if (buttonDimension.top > verticalCenter) {
				dropdownRef.current.style.bottom = '100%';
			}

			if (buttonDimension.left > horizontalCenter) {
				dropdownRef.current.style.right = '0';
			} else if (buttonDimension.left > horizontalLeft) {
				dropdownRef.current.style.left = `${
					buttonDimension.width / 2 - dropdownDimension.width / 2
				}px`;
			} else if (buttonDimension.left < horizontalLeft) {
				dropdownRef.current.style.left = '0';
			}
		}
	}, [isOpen]);

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
				className="p-2 gap-2 "
			>
				{placeholder ? (
					<>
						{placeholder}
						<EllipsisVertical className="size-4 md:size-6" />
					</>
				) : (
					<Menu className="size-6 md:size-7" />
				)}
			</Button>

			{isOpen && (
				<div
					className="dropdown-menu absolute bg-white border border-zinc-300 rounded-lg shadow-lg dark:shadow-white/10 flex flex-col dark:bg-zinc-900 dark:border-zinc-600 dark:text-white max-h-[45dvh] w-fit overflow-y-auto my-2"
					ref={dropdownRef}
				>
					{items.map((item) =>
						item.type === 'link' ? (
							<Link
								href={item.href}
								key={item.href}
								onClick={handleOpenChange}
								className="py-2 px-3 min-w-24 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
							>
								{item.title}
							</Link>
						) : (
							<Button
								onClick={itemClickHandler(item.onClick)}
								key={item.title}
								variant={item.variant}
								className="m-1 min-w-24 py-2 px-3"
							>
								{item.title}
							</Button>
						)
					)}
				</div>
			)}
		</div>
	);
}
