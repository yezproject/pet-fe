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

export function addTransaction(params) {
    // start add defaultsd
    // const defaultParams = {
    //     categoryId: "string",
    //     name: "transaction one",
    //     amount: 2000000,
    //     transactionDate: 0
    // }
    // end
    return HTTP.post("transactions", params)
}

export function updateTransaction(transactionId, params) {
    return HTTP.put(`transactions/${transactionId}`, params)
}

export function deleteTransactions(params) {
    return HTTP.delete(`transactions?ids=${params}`)
}
