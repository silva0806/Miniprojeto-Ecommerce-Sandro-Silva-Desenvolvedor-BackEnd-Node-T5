# Nome do projeto: Miniprojeto-Ecommerce-Sandro-Silva-Desenvolvedor-BackEnd-Node-T5

# Autor
- Sandro Luis da Silva
- Curso Desenvolvedor Backend Node Turma 5
- SENAI SC

# Objetivo
Organizar suas operações comerciais de uma loja por meio de um sistema que permita cadastrar produtos, controlar o estoque, montar carrinhos de compras, registrar pedidos e acompanhar os resultados das vendas

# Funcionalidades implementadas

# Tecnologias utilizadas
Node e typescript

# Estruturas dos arquivos
miniprojeto-ecommerce/
├── src/
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   ├── relatorios.ts
│   └── main.ts
├── dist/
├── README.md
├── tsconfig.json
└── .gitignore

types.ts: definição dos tipos utilizados pelo sistema.
produtos.ts: cadastro, consulta, atualização e remoção de produtos.
clientes.ts: cadastro e consulta de clientes.
carrinho.ts: operações do carrinho e cálculos dos valores.
pedidos.ts: finalização e consulta de pedidos.
relatorios.ts: funções de consolidação e apresentação dos resultados.
main.ts: inicialização da aplicação e demonstração das funcionalidades
tsconfig.json: configurações do typescript para o projeto
.gitignore: arquivos e pastas que não farão parte do controle de versão do repositório


# Instruções para compilar e executar o projeto

- Abra o terminal na pasta raiz e execute `tsc` para rodar o compilador. Voce pode executar `tsc -w` para manter o compilador compilando de forma automática a cada alteração que for realizada em arquivos `.ts` ;
- Depois abra um novo terminal na pasta dist e execute o arquivo .js que você quiser
com o comando `node arquivo.js`;
- O arquivo principal do projeto é o main.js

# Exemplos das principais operações

# Regras de negócio implementadas

# Limitações do sistema
- Não utiliza conexão com banco de dados
- As operações realizadas ocorrem apenas em memória
- Não realiza integração com meios de pagamento
- Não interage com páginas web