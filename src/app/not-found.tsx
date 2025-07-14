import { Text } from '@/components/Text';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<div className="h-[80dvh] flex justify-center items-center flex-col">
			<Text tag="h1" className="text-center">404</Text>

			<Text className="mt-2 text-center max-w-3/4">
        Oops! The page you are looking for does not exist.
      </Text>

			<Link
				href="/"
				className="bg-primary-300 text-white dark:bg-zinc-100 dark:text-zinc-900 py-2 px-3 font-semibold items-center justify-center rounded-lg flex gap-3 mt-6"
			>
				Back to home
			</Link>
		</div>
	);
}
