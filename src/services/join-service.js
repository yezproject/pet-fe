import HTTP from '@/services/base-api-service';

export async function signIn({ email, password }) {
  return await HTTP.post('auth/sign_in', { email, password });
}

export function signUp({ email, password, fullName }) {
  return HTTP.post('auth/sign_up', { email, password, fullName });
}
