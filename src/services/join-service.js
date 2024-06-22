import HTTP from "@/services/base-api-service"

export async function signIn(params) {
    return await HTTP.post("public/sign_in", params)
}

export function signUp(params) {
    return HTTP.post("public/sign_up", params)
}

export function getTransactions() {
    return HTTP.get("transactions")
}

export function getTransactionById(transactionId) {
    return HTTP.get(`transactions/${transactionId}`)
}

export function addTransaction(body) {
    return HTTP.post("transactions", body)
}

export function updateTransaction(transactionId, body) {
    return HTTP.put(`transactions/${transactionId}`, body)
}

export function deleteTransactions(params) {
    return HTTP.delete(`transactions?ids=${params}`)
}
