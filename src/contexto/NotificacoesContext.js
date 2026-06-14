import { createContext, useContext, useState } from 'react';

const NotificacoesContext = createContext(null);

export function NotificacoesProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);

  function adicionarNotificacao({ titulo, descricao, tipo = 'info' }) {
    setNotificacoes((prev) => [{
      id: String(Date.now()),
      titulo,
      descricao,
      tipo,
      data: new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      lida: false,
    }, ...prev]);
  }

  return (
    <NotificacoesContext.Provider value={{ notificacoes, adicionarNotificacao }}>
      {children}
    </NotificacoesContext.Provider>
  );
}

export function useNotificacoes() {
  return useContext(NotificacoesContext);
}
