import { create } from "zustand"

const categoryStorage = create((set) => ({
    categoryDictionary: {},
    setCategories: (categories) => set(() => ({ categories: categories })),
}))

export default categoryStorage