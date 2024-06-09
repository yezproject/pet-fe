import HTTP from '@/services/base-api-service';

export async function signIn(params) {
  return await HTTP.post('public/sign_in', params);
}

export function signUp(params) {
  return HTTP.post('public/sign_up', {
      fullName: 'admin',
      email: 'duc0911199873@gmail.com',
      password: '123456'
  });
}

export function getTransactions() {
    return HTTP.get('transactions');
}

export function getTransactionById(transactionId) {
    return HTTP.get(`transactions/${transactionId}`);
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
    return HTTP.post(`transactions`, defaultParams);
}

export function updateTransaction(transactionId, params) {
    return HTTP.put(`transactions/${transactionId}`, params);
}

export function deleteTransaction(transactionId) {
    return HTTP.delete(`transactions/${transactionId}`);
}
