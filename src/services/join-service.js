import HTTP from '@/services/base-api-service';

export async function signIn(params) {
  return await HTTP.post('auth/sign_in', params);
}

export function signUp(params) {
  return HTTP.post('auth/sign_up', params);
}

export function getTransactions() {
    return HTTP.get('api/transactions');
}

export function getTransactionById(transactionId) {
    return HTTP.get(`api/transactions/${transactionId}`);
}

export function addTransaction(params) {
    // start add default
    const defaultParams = {
        categoryId: "string",
        name: "transaction one",
        amount: 2000000,
        transactionDate: 0
    }
    // end
    return HTTP.post(`api/transactions`, defaultParams);
}

export function updateTransaction(transactionId, params) {
    return HTTP.put(`api/transactions/${transactionId}`, params);
}

export function deleteTransaction(transactionId) {
    return HTTP.delete(`api/transactions/${transactionId}`);
}
