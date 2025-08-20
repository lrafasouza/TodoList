# TodoList - Angular

Uma aplicação moderna e elegante de lista de tarefas desenvolvida com Angular 20, oferecendo uma experiência de usuário fluida e intuitiva para gerenciar suas tarefas diárias.

## Funcionalidades

- **Adicionar tarefas** - Interface simples com feedback visual
- **Excluir tarefas** - Remoção rápida com confirmação visual
- **Marcar como concluída** - Toggle com animação suave
- **Categorização** - Organize tarefas por categorias (Casa, Trabalho, Faculdade, Academia, Lazer)
- **Persistência** - Dados salvos automaticamente via JSON Server
- **Estados visuais** - Empty state
- **Animações** - Transições suaves e feedback visual
- **Design responsivo** - Interface adaptada para diferentes telas

## Tecnologias

- **Angular** 20.0.0 (com nova sintaxe de controle de fluxo)
- **TypeScript** 5.8.2
- **FontAwesome** 6.7.2 para ícones
- **JSON Server** 1.0.0-beta.3 para API local
- **RxJS** 7.8.0 para programação reativa
- **CSS3** com animações e gradientes modernos

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes)

## Instalação

1. Clone o repositório:
```bash
git clone <https://github.com/lrafasouza/to-do-List.git>
cd TodoList
```

2. Instale as dependências:
```bash
npm install
```

## Como usar

### Desenvolvimento

1. **Inicie o servidor JSON** (API local) em um terminal:
```bash
npm run server
```
> Servidor rodará em `http://localhost:3000`

2. **Inicie a aplicação Angular** em outro terminal:
```bash
npm start
```
> Aplicação rodará em `http://localhost:4200`

3. **Acesse no navegador**: `http://localhost:4200`

### Build para produção

```bash
npm run build
```

### Executar testes

```bash
npm test
```

### Usando a aplicação

1. **Adicionar tarefa**: Digite o nome da tarefa e clique em "Add"
2. **Marcar como concluída**: Clique no checkbox ao lado da tarefa
3. **Excluir tarefa**: Clique no ícone de lixeira
4. **Feedback visual**: Observe as animações e estados da interface

## Estrutura do projeto

```
TodoList/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes da aplicação
│   │   │   ├── add-task/       # Adicionar tarefas (input + botão)
│   │   │   ├── header/         # Cabeçalho da aplicação
│   │   │   ├── task-item/      # Item individual de tarefa
│   │   │   └── tasks/          # Container de tarefas
│   │   ├── services/           # Serviços da aplicação
│   │   │   └── taskservice.ts  # HTTP requests para API
│   │   ├── Model/              # Modelos de dados
│   │   │   └── Tarefa.ts       # Interface TypeScript
│   │   ├── app.ts              # Componente raiz
│   │   └── app.config.ts       # Configurações do app
│   ├── styles.css              # Estilos globais
│   ├── main.ts                 # Bootstrap da aplicação
│   └── index.html              # Arquivo HTML principal
├── db.json                     # Banco de dados JSON
├── package.json                # Dependências do projeto
└── angular.json                # Configurações do Angular
```

## Design & Interface

### Visual
- **Gradiente roxo** moderno como background
- **Container branco** centralizado com sombras
- **Animações CSS** suaves em todos os elementos
- **Ícones FontAwesome** para melhor UX
- **Checkbox customizado** com animação de check

### Estados da aplicação
- **Empty state**: Mensagem quando não há tarefas
- **Success feedback**: Ícone de check ao adicionar tarefa

### Responsividade
- Layout flexível adaptado para mobile e desktop
- Containers com max-width para melhor legibilidade

## API

A aplicação utiliza JSON Server para simular uma API REST local:

- **GET** `/tasks` - Listar tarefas
- **POST** `/tasks` - Criar tarefa
- **PUT** `/tasks/:id` - Atualizar tarefa
- **DELETE** `/tasks/:id` - Remover tarefa

## Recursos Técnicos

### Angular 20 Features
- **Nova sintaxe de controle de fluxo**: `@if`, `@for`, `@else`
- **Standalone components**: Sem necessidade de módulos

### CSS Features
- **CSS Grid & Flexbox** para layouts responsivos
- **CSS Animations** com keyframes customizados
- **CSS Variables** para consistência de cores
- **Hover effects** com transitions suaves

### Tratamento de Erros
- **HTTP Error handling** com retry automático
- **Loading states** para melhor UX
- **Fallback UI** para estados de erro
- **Console logging** para debugging

## Autor

**Rafael Souza** - [@lrafasouza](https://github.com/lrafasouza)

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Recursos Adicionais

- [Angular Documentation](https://angular.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [JSON Server](https://github.com/typicode/json-server)