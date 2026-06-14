import { BASE_URL, headersPadrao } from './config';

async function checarResposta(response) {
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || err.erro || String(response.status));
  }
  return response.json();
}

export async function listarCursos(token) {
  const response = await fetch(`${BASE_URL}/api/cursos`, {
    headers: { ...headersPadrao, Authorization: `Bearer ${token}` },
  });
  return checarResposta(response);
}
