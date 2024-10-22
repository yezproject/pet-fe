import HTTP from "@/services/base-api-service.js"
import { useCategoryStore } from "@/state/category-store.js"

function getCategories() {
    return HTTP.get("categories")
}

function getCategoryById(categoryId) {
    return HTTP.get(`categories/${categoryId}`)
}

function addCategory(body) {
    return HTTP.post("categories", body)
}

function updateCategory(categoryId, body) {
    return HTTP.put(`categories/${categoryId}`, body)
}

function deleteCategory(categoryId) {
    return HTTP.delete(`categories/${categoryId}`)
}

const categoryService = {
    getCategories: async () => {
        const res = await getCategories()
        if (res?.data) {
            useCategoryStore.getState().setCategories(res.data)
        }
        return res
    },
    addCategory,
    updateCategory,
    deleteCategory,
}

export default categoryService