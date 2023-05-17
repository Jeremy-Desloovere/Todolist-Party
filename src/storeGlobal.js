import { create } from 'zustand'

export const useStoreGlobal = create((set) => ({
    zIndexMax: 1,
    upZindexMax: () => {
        set((state) => ({
            zIndexMax: state.zIndexMax + 1,
        }));
    }


}))