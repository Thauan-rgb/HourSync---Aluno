# HourSync — App do Aluno 

> Aplicativo mobile para gerenciamento de horas complementares, desenvolvido em React Native com Expo. Permite que alunos enviem certificados, acompanhem o progresso de horas por curso e visualizem o status de aprovação de cada atividade.

---

##  Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Variáveis de Ambiente / Configuração de API](#variáveis-de-ambiente--configuração-de-api)
- [Telas](#telas)
- [Fluxo de Navegação](#fluxo-de-navegação)

---

## Sobre o Projeto

O **HourSync (App do Aluno)** é o cliente mobile do sistema HourSync — uma plataforma para controle de horas complementares acadêmicas. Por meio do app, o aluno consegue:

- Fazer login com suas credenciais institucionais;
- Enviar certificados de atividades complementares com foto ou PDF;
- Acompanhar o progresso de horas aprovadas por curso;
- Filtrar e pesquisar certificados por status (Pendente, Aprovado, Rejeitado);
- Receber notificações sobre o andamento dos seus envios.

O backend do sistema está hospedado em `https://backendhoursync-1.onrender.com` e toda a comunicação é feita via REST API com autenticação JWT.

---

## Funcionalidades

- ✅ **Login** com e-mail e senha
- ✅ **Recuperação de senha** por e-mail
- ✅ **Dashboard** com progresso de horas por curso (aprovadas, pendentes, rejeitadas)
- ✅ **Troca de curso** no dashboard via dropdown
- ✅ **Envio de certificado** em dois passos (formulário + revisão antes de confirmar)
- ✅ **Upload de arquivo** (foto ou PDF do certificado)
- ✅ **Lista de certificados** com busca por título e filtros por status
- ✅ **Notificações** de atualização dos certificados
- ✅ **Menu lateral (Drawer)** com navegação entre seções
- ✅ **Contexto de autenticação** global via React Context API

---

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React Native](https://reactnative.dev/) | 0.81.5 | Framework mobile |
| [Expo](https://expo.dev/) | ~54.0.33 | Plataforma de build e dev |
| [React](https://react.dev/) | 19.1.0 | Biblioteca de UI |
| [React Navigation](https://reactnavigation.org/) | ^7 | Navegação entre telas |
| [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) | ~17.0.11 | Seleção de fotos/PDFs |
| [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) | ~3.16.0 | Animações |
| [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) | ~2.20.0 | Gestos (necessário para o Drawer) |
| [React Native Masked Text](https://github.com/benhurott/react-native-masked-text) | ^1.13.0 | Máscara de campos de texto |

---

## Estrutura do Projeto

```
HourSync---Aluno-main/
├── assets/                  # Imagens e ícones do app
│   ├── icon.png
│   ├── logo.png
│   ├── splash-icon.png
│   └── ...
├── src/
│   ├── api/                 # Funções de comunicação com o backend
│   │   ├── config.js        # BASE_URL e headers padrão
│   │   ├── auth.js          # Login
│   │   ├── certificados.js  # Listar e criar certificados
│   │   ├── categorias.js    # Listar categorias
│   │   └── cursos.js        # Listar cursos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ActivityCard.js
│   │   ├── ActivityList.js
│   │   ├── DashboardHeader.js
│   │   ├── StatsCards.js
│   │   ├── LoginForm.js
│   │   ├── Customdrawer.js
│   │   ├── cardCertificados.js
│   │   ├── formularioEnvioHoras1.js
│   │   ├── tirarFotoEpdf.js
│   │   └── ...
│   ├── contexto/
│   │   └── AuthContext.js   # Context API de autenticação (token + usuário)
│   ├── navigation/
│   │   └── AppNavigator.js  # Configuração de rotas (Stack + Drawer)
│   ├── screen/              # Telas do aplicativo
│   │   ├── login.js
│   │   ├── EsqueceuSenha.js
│   │   ├── Dashboard.js
│   │   ├── envioHoras1.js
│   │   ├── envioHoras2.js
│   │   ├── certificados.js
│   │   └── notificacoes.js
│   └── styles/              # Arquivos de estilo separados por componente/tela
├── app.json                 # Configurações do Expo
├── babel.config.js
├── index.js                 # Entry point
└── package.json
```

---

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — instale globalmente:

```bash
npm install -g expo-cli
```

- Para rodar no dispositivo físico: app **Expo Go** ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Para rodar em emulador: [Android Studio](https://developer.android.com/studio) ou [Xcode](https://developer.apple.com/xcode/) (somente macOS)

---

## Como Rodar o Projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/HourSync---Aluno.git
cd HourSync---Aluno
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**

```bash
npx expo start
```

**4. Escolha como rodar:**

- Pressione `a` para abrir no emulador Android
- Pressione `i` para abrir no simulador iOS (requer macOS)
- Escaneie o QR Code com o app **Expo Go** no seu celular

---

## Variáveis de Ambiente / Configuração de API

A URL base da API está definida em `src/api/config.js`:

```js
export const BASE_URL = 'https://backendhoursync-1.onrender.com';
```

Caso precise apontar para um backend local ou de homologação, basta alterar essa constante:

```js
export const BASE_URL = 'http://192.168.x.x:3000'; // ex: backend rodando localmente
```

> **Atenção:** em desenvolvimento com dispositivo físico, use o IP da sua máquina na rede local — `localhost` não funciona em dispositivos reais.

---

## Telas

###  Login
Tela inicial do app. O aluno insere e-mail e senha para autenticar. Após o login bem-sucedido, o token JWT é armazenado no contexto global e o usuário é redirecionado ao Dashboard.

###  Esqueceu a Senha
Permite que o aluno informe seu e-mail para receber um link de redefinição de senha.

###  Dashboard
Tela principal após o login. Exibe:
- Progresso de horas complementares do curso selecionado (aprovadas vs. meta);
- Contagem de certificados pendentes e rejeitados;
- Lista de atividades enviadas com status visual;
- Dropdown para alternar entre cursos (quando o aluno está matriculado em mais de um).

###  Envio de Horas — Passo 1
Formulário de envio de certificado. O aluno preenche:
- Curso (dropdown com busca na API);
- Categoria da atividade (dropdown);
- Quantidade de horas;
- Data de emissão (opcional);
- Arquivo (foto ou PDF do certificado).

###  Envio de Horas — Passo 2
Tela de revisão antes do envio final. Exibe um resumo dos dados preenchidos e permite confirmar ou voltar para editar.

###  Certificados
Lista todos os certificados enviados pelo aluno. Oferece:
- Barra de busca por título;
- Filtros rápidos por status: Todos, Pendentes, Rejeitados, Aprovados.

###  Notificações
Exibe notificações sobre o andamento dos certificados (aprovações, rejeições, marcos de horas atingidos e novas categorias disponíveis).

---

## Fluxo de Navegação

```
App
└── Stack Navigator
    ├── Login
    ├── EsqueceuSenha
    └── Main (Drawer Navigator)
        ├── Dashboard          ← tela inicial após login
        ├── EnvioHoras1        ← formulário (passo 1)
        ├── EnvioHoras2        ← revisão e envio (passo 2)
        ├── Certificados
        └── Notificacoes
```

A autenticação é gerenciada pelo `AuthContext`, que fornece `token` e `usuario` para todas as telas. O Drawer lateral (`CustomDrawer`) está disponível em todas as telas após o login.

---

> Projeto desenvolvido como parte do sistema **HourSync** — controle de horas complementares acadêmicas.
