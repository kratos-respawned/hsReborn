import { create } from "zustand";

const loadingState = (set: any) => ({
    loading: true as boolean,
    setLoading: () => set(() => ({ loading: true })),
    setLoaded: () => set(() => ({ loading: false }))
})


export const useLoader = create(loadingState);
