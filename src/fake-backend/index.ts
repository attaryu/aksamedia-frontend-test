import type { INote } from './entities/note';
import type { DocumentSchema } from './storages/LocalStorage';

import { UserController } from './controllers/implements/User';
import { UserRepository } from './repositories/implements/User';
import { LocalStorage } from './storages/implements/LocalStorage';

export const noteDummy: INote[] = [
	{
		id: '724',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '641',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '916',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '466',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '329',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '594',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '203',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '996',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '617',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '160',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '797',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '288',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '557',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '336',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '188',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '584',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '433',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '899',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '909',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '164',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '806',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '319',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '429',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '774',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '115',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '809',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '335',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '156',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '970',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '921',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '248',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '809',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '237',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
	{
		id: '507',
		title: 'Lorem, ipsum dolor.',
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		createdAt: '2023-11-28T19:07:35.480Z',
		updatedAt: '2024-03-10T05:22:18.941Z',
	},
	{
		id: '142',
		title: 'Lorem ipsum dolor sit.',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos odit earum repellat dolorum et nesciunt quaerat, eligendi, porro consequuntur laboriosam fugit magni quia minima nemo deleniti numquam aliquid officiis, saepe nobis.',
		createdAt: '2024-06-20T02:59:11.305Z',
		updatedAt: '2025-08-01T11:45:03.772Z',
	},
	{
		id: '376',
		title: 'Lorem, ipsum.',
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae est corporis non minus?',
		createdAt: '2023-01-05T21:15:29.620Z',
		updatedAt: '2025-04-18T09:33:07.015Z',
	},
];

export const paginationNoteDummy = {
	data: noteDummy.slice(0, 10),
	pagination: {
		currentPage: 1,
		itemPerPage: 10,
		totalPage: Math.ceil(noteDummy.length / 10),
	},
};

const defaultSchema: DocumentSchema = {
	user: {
		email: 'johndoe@example.com',
		fullName: 'John Doe',
		shortName: 'JD',
		username: 'john_doe',
		password: '12345678',
	},
	notes: [],
};

export function useUserController() {
	const storage = new LocalStorage(defaultSchema);
	const userRepository = new UserRepository(storage);

	return new UserController(userRepository);
}
