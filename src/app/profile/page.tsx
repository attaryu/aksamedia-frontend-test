import { Text } from '@/components/Text';
import Form from './Form';

export default function ProfilePage() {
	return (
		<main className="container-px container-pt md:w-2/3 md:mx-auto space-y-8">
			<div className="space-y-2">
				<Text tag="h1" styling="h2">
					Profile
				</Text>

				<Text className="text-gray-600">Manage your profile information</Text>
			</div>

			<Form />
		</main>
	);
}
