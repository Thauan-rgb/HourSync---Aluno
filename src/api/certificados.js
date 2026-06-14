import { BASE_URL, headersPadrao } from './config';

async function checarResposta(response) {
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || err.erro || String(response.status));
  }
  return response.json();
}

export async function listarCertificados(token) {
  const response = await fetch(`${BASE_URL}/api/certificados`, {
    headers: { ...headersPadrao, Authorization: `Bearer ${token}` },
  });
  return checarResposta(response);
}

export async function criarCertificado(dados, token) {
  const formData = new FormData();
  formData.append('titulo', dados.titulo);
  formData.append('horas', String(dados.horas));
  formData.append('alunoId', dados.alunoId);
  formData.append('categoriaId', dados.categoriaId);
  formData.append('cursoId', dados.cursoId);
  if (dados.dataEmissao) formData.append('dataEmissao', dados.dataEmissao);

  if (dados.arquivo) {
    formData.append('arquivo', {
      uri: dados.arquivo.uri,
      name: dados.arquivo.fileName || 'certificado.jpg',
      type: dados.arquivo.mimeType || 'image/jpeg',
    });
  }

  const response = await fetch(`${BASE_URL}/api/certificados`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return checarResposta(response);
}
