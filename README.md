# TodoList

Uma aplicação de lista de tarefas moderna desenvolvida com Angular 20, que permite gerenciar tarefas de forma eficiente com interface intuitiva.

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas com categorias
- 📝 Editar tarefas existentes
- 🗑️ Remover tarefas
- ✔️ Marcar/desmarcar tarefas como concluídas
- 🎯 Organização por categorias
- 💾 Persistência de dados com JSON Server

## 🛠️ Tecnologias

- **Angular** 20.0.0
- **TypeScript** 5.8.2
- **FontAwesome** para ícones
- **JSON Server** para API local
- **RxJS** para programação reativa

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <https://github.com/lrafasouza/to-do-List.git>
cd TodoList
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Como usar

### Desenvolvimento

1. Inicie o servidor JSON (API local):
```bash
npm run server
```

2. Em outro terminal, inicie a aplicação Angular:
```bash
npm start
```

3. Acesse `http://localhost:4200` no seu navegador

### Build para produção

```bash
npm run build
```

### Executar testes

```bash
npm test
```

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── components/          # Componentes da aplicação
│   │   ├── add-task/       # Componente para adicionar tarefas
│   │   ├── header/         # Cabeçalho da aplicação
│   │   ├── task-item/      # Item individual de tarefa
│   │   └── tasks/          # Lista de tarefas
│   ├── services/           # Serviços da aplicação
│   │   └── taskservice.ts  # Serviço para gerenciar tarefas
│   └── Model/              # Modelos de dados
│       └── Tarefa.ts       # Interface da tarefa
├── styles.css              # Estilos globais
└── main.ts                 # Arquivo principal
```

## 🎨 Interface

A aplicação possui uma interface limpa e moderna com:
- Header com título da aplicação
- Formulário para adicionar novas tarefas
- Lista de tarefas com opções de edição e remoção
- Sistema de marcação de tarefas concluídas

## 📡 API

A aplicação utiliza JSON Server para simular uma API REST local:
- **GET** `/tasks` - Listar todas as tarefas
- **POST** `/tasks` - Criar nova tarefa
- **PUT** `/tasks/:id` - Atualizar tarefa
- **DELETE** `/tasks/:id` - Remover tarefa

## 📄 Licença

Este projeto está sob a licença MIT.

## 🔧 Comandos Angular CLI

### Servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

### Scaffolding de código

Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

### Build

Para fazer o build do projeto execute:

```bash
ng build
```

### Testes unitários

Para executar os testes unitários com [Karma](https://karma-runner.github.io), execute:

```bash
ng test
```

## 📚 Recursos Adicionais

Para mais informações sobre o Angular CLI, visite a [documentação oficial](https://angular.dev/tools/cli).
