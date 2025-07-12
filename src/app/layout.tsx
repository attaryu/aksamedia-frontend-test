import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import { Navbar } from '@/components/Navbar';

import './globals.css';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: {
		default: 'Noto - A Modern Note-Taking App',
		template: '%s | Noto',
	},
	description: 'Noto is a modern, minimalistic note-taking web application.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} antialiased dark:bg-zinc-950 pt-24`}
			>
				<Navbar />

				{children}
			</body>
		</html>
	);
}
