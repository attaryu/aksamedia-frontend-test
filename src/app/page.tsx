import { Text } from '@/components/Text';

export default function Home() {
	return (
		<main className="h-[80dvh] p-4 container-px flex justify-center items-center gap-4 flex-col">
			<Text tag="h1" className="text-center">
				Welcome to Noto!
			</Text>

			<Text className="text-center">
				Noto is a modern, minimalistic note-taking web application. Please log
				in to continue.
			</Text>
		</main>
	);
}
