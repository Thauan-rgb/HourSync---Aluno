import { BASE_URL, headersPadrao } from './config';

export async function listarCategorias(token) {
  const response = await fetch(`${BASE_URL}/api/categorias`, {
    headers: { ...headersPadrao, Authorization: `Bearer ${token}` },
  });
  return response.json();
}
