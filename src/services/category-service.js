import HTTP from "@/services/base-api-service.js"

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

export default class CategoryService {
    static getCategories = getCategories
    static addCategory = addCategory
    static updateCategory = updateCategory
    static deleteCategory = deleteCategory
}