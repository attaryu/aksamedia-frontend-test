import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';

export default function LoginPage() {
	return (
		<main className="p-4 h-[75dvh] grid place-items-center">
			<form className="space-y-10 w-full">
				<div className="space-y-2">
					<Text tag="h1" styling="h2" className="">
						Login
					</Text>

					<Text className="">Please log in to continue.</Text>
				</div>

				<div className="flex flex-col gap-4">
					<Input type="email" placeholder="example@mail.com" required />
					<Input type="password" placeholder="Your password..." required />
				</div>

				<div className="flex gap-2 flex-row">
					<Button type="reset" variant="secondary" className="w-full">
						Reset
					</Button>

					<Button type="button" className="w-full">
						Submit
					</Button>
				</div>
			</form>
		</main>
	);
}
