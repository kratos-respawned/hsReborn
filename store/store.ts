import { create } from "zustand";

const loadingState = (set: any) => ({
    loading: true as boolean,
    setLoaded: () => set(
        () => ({
            loading: false
        })),
})


export const useLoader = create(loadingState);
