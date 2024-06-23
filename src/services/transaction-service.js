import HTTP from "@/services/base-api-service.js"

function getTransactions() {
    return HTTP.get("transactions")
}

function getTransactionById(transactionId) {
    return HTTP.get(`transactions/${transactionId}`)
}

function addTransaction(body) {
    return HTTP.post("transactions", body)
}

function updateTransaction(transactionId, body) {
    return HTTP.put(`transactions/${transactionId}`, body)
}

function deleteTransactions(params) {
    return HTTP.delete(`transactions?ids=${params}`)
}

export default class TransactionService {
    static getTransactions = getTransactions
    static addTransaction = addTransaction
    static updateTransaction = updateTransaction
    static deleteTransactions = deleteTransactions
}