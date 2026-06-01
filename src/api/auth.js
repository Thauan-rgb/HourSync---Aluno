import { BASE_URL, headersPadrao } from './config';

export async function login(email, senha) {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: headersPadrao,
    body: JSON.stringify({ email, senha }),
  });
  return response.json();
}
