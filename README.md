# Nome do projeto: Miniprojeto-Ecommerce-Sandro-Silva-Desenvolvedor-BackEnd-Node-T5

# Autor
- Sandro Luis da Silva
- Curso Desenvolvedor Backend Node Turma 5
- SENAI SC

# Objetivo
Organizar suas operações comerciais de uma loja por meio de um sistema que permita cadastrar produtos, controlar o estoque, montar carrinhos de compras, registrar pedidos e acompanhar os resultados das vendas

# Funcionalidades implementadas

**Produtos** (`produtos.ts`)
- Cadastrar, listar, buscar pelo código, buscar por parte do nome, filtrar por categoria, atualizar e remover produtos.
- Baixar o estoque após a venda (`atualizarEstoque`).

**Clientes** (`clientes.ts`)
- Cadastrar, listar e buscar cliente pelo id.

**Carrinho** (`carrinho.ts`)
- Adicionar, remover e alterar a quantidade de um produto.
- Listar o carrinho, calcular o subtotal de cada item e o total da compra.

**Pedidos** (`pedidos.ts`)
- Finalizar a compra (`registrarPedido`), transformando o carrinho em pedido.
- Consultar todos os pedidos ou apenas os de um cliente (`consultarPedidos`).

# Tecnologias utilizadas
- Node.js
- TypeScript (tipagem explícita, módulos com `export`/`import`)
- Dados mantidos em arrays, em memória, sem banco de dados

# Estruturas dos arquivos
```text
miniprojeto-ecommerce/
├── src/
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   └── main.ts
├── dist/
├── README.md
├── tsconfig.json
└── .gitignore
```

- `types.ts`: definição dos tipos utilizados pelo sistema.
- `produtos.ts`: cadastro, consulta, atualização e remoção de produtos.
- `clientes.ts`: cadastro e consulta de clientes.
- `carrinho.ts`: operações do carrinho e cálculos dos valores.
- `pedidos.ts`: finalização e consulta de pedidos.
- `main.ts`: inicialização da aplicação e demonstração das funcionalidades.
- `dist/`: arquivos JavaScript gerados pela compilação (não é versionado).
- `tsconfig.json`: configurações do TypeScript para o projeto.
- `.gitignore`: arquivos e pastas que não farão parte do controle de versão do repositório.


# Instruções para compilar e executar o projeto

- É necessário ter o TypeScript instalado globalmente.
- Abra o terminal na pasta raiz e execute `tsc` para rodar o compilador. Você pode executar `tsc -w` para manter o compilador compilando de forma automática a cada alteração que for realizada em arquivos `.ts`
- Depois execute o arquivo principal com `node dist/main.js`, a partir da pasta raiz (ou `cd dist` e `node main.js`);
- O arquivo principal do projeto é o main.js

# Exemplos das principais operações

```typescript
// Produtos
cadastrarProduto({codigo: 1, nome: "Teclado sem fio", preco: 300, estoque: 10, categoria: "eletronicos"});
buscarProdutoPorNome("ta");
filtrarProdutoPorCategoria("eletronicos");
atualizarInformacoesProduto({codigo: 1, nome: "Teclado", preco: 355.50, estoque: 15, categoria: "eletronicos"});
removerProduto(10);

// Clientes
cadastrarCliente({id: 1, nome: "Pedro", email: "c1@meail.com"});
buscarClientePeloID(1);

// Carrinho
const carrinho: Carrinho = { id: 1, cliente: cliente1, itens: [] };
adicionarProdutoNoCarrinho(carrinho, 1, 2);   // código do produto, quantidade
alterarQuantidadeItem(carrinho, 1, 3);
removerProdutoDoCarrinho(carrinho, 1);
listarCarrinho(carrinho);

// Pedidos
registrarPedido(carrinho);
consultarPedidos(0);   // 0 lista todos os pedidos
consultarPedidos(4);   // lista os pedidos do cliente 4
```

O arquivo `main.ts` executa todas essas operações, incluindo os casos inválidos, e mostra o resultado no terminal.

# Regras de negócio implementadas

**Produtos**
- O código do produto é único.
- O nome não pode ser vazio.
- O preço deve ser maior que zero.
- O estoque não pode ser negativo.

**Clientes**
- O id e o e-mail são únicos.
- Nome e e-mail são obrigatórios, e o e-mail precisa conter `@` e `.`.

**Carrinho**
- A quantidade deve ser maior que zero.
- Não é possível adicionar produto inexistente.
- A quantidade (adicionada ou alterada) não pode passar do estoque disponível.
- Adicionar um produto que já está no carrinho soma à quantidade, sem duplicar a linha.
- Subtotal = preço × quantidade; total = soma dos subtotais.

**Pedidos**
- Não é possível finalizar com o carrinho vazio.
- O cliente precisa estar cadastrado.
- O estoque de todos os itens é conferido antes de gravar. Se algum item falhar, o pedido não é registrado e nenhum estoque é descontado.
- O estoque só é reduzido depois de o pedido ser gravado.
- O pedido guarda uma cópia dos itens com o preço do momento da compra, então alterações posteriores no carrinho ou no catálogo não o modificam.
- O id do pedido é sequencial e a data é a do momento da finalização.

# Limitações do sistema
- Não utiliza conexão com banco de dados
- As operações realizadas ocorrem apenas em memória
- Não realiza integração com meios de pagamento
- Não interage com páginas web
- O pedido guarda o cliente completo, e não apenas o `clienteId`
- O id do pedido é calculado pela quantidade de pedidos, o que só é seguro porque pedidos não são removidos
- Não há relatórios de vendas

# Fontes consultadas
- Formatação de datas: https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript
- Operador spread: https://www.luiztools.com.br/post/4-segredos-do-operador-spread-em-javascript/
- Objeto Date: https://blog.betrybe.com/javascript/javascript-date/
- Bloco de código : https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks