import { BASE_URL, headersPadrao } from './config';

export async function listarCursos(token) {
  const response = await fetch(`${BASE_URL}/api/cursos`, {
    headers: { ...headersPadrao, Authorization: `Bearer ${token}` },
  });
  return response.json();
}

export async function buscarCurso(id, token) {
  const response = await fetch(`${BASE_URL}/api/cursos/${id}`, {
    headers: { ...headersPadrao, Authorization: `Bearer ${token}` },
  });
  return response.json();
}
