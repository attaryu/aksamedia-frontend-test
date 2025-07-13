import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useHydrationLoading = create<{
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
}>()(
	persist(
		(set) => ({
			isLoading: true,
			setLoading: (loading: boolean) => set({ isLoading: loading }),
		}),
		{
			name: 'NOTO_LOADING',
			onRehydrateStorage: () => (state) => {
				if (state) {
					state.setLoading(false);
				}
			},
		}
	)
);
