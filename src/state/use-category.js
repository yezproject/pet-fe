import create from "zustand"

const useCategoryState = create((set) => ({
    categories: [],
    setCategories: (categories) => set(() => ({ categories: categories })),
}))

export default useCategoryState