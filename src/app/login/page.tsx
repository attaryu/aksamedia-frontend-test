import { Metadata } from 'next';
import { Form } from './Form';

export const metadata: Metadata = {
	title: 'Login',
};

export default function LoginPage() {
	return (
		<main className="p-4 h-[75dvh] grid place-items-center">
			<Form />
		</main>
	);
}
