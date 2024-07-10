import { create } from "zustand"

export const useCategoryStore = create((set) => ({
    categoryDictionary: {},
    setCategories: (categories) => set(() => ({ categories: categories })),
}))
