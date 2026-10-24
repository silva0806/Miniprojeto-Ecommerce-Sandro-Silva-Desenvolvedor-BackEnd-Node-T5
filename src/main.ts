import { buscarClientePeloID
    , cadastrarCliente
    , listarClientes} from "./clientes";
import { buscarProdutoPeloCodigo
    , cadastrarProduto
    , listarProdutos
    , buscarProdutoPorNome 
    , filtrarProdutoPorCategoria
    , atualizarInformacoesProduto
    , removerProduto} from "./produtos";
import type { Cliente, Produto } from "./types";
import { Carrinho
    , adicionarProdutoNoCarrinho
    , removerProdutoDoCarrinho
    , alterarQuantidadeItem    
    , listarCarrinho } from "./carrinho";
import { registrarPedido
    , Pedidos
    , consultarPedidos
 } from "./pedidos";

console.log("***************************************");
console.log("Requisitos produtos");
console.log("***************************************");

console.log("***************************************");
console.log("Cadastrando produtos aplicando regras");
console.log("***************************************");

cadastrarProduto({codigo: 1, nome: "Teclado sem fio", preco: 300, estoque: 10, categoria: "eletronicos"}); // válido
cadastrarProduto({codigo: 1, nome: "Mouse sem fio", preco: 150, estoque: 10, categoria: "eletronicos"}); // id duplicado
cadastrarProduto({codigo: 3, nome: "", preco: 150, estoque: 10, categoria: "eletronicos"}); // sem nome
cadastrarProduto({codigo: 4, nome: "Monitor", preco: 800, estoque: -1, categoria: "eletronicos"}); // estoque negativo
cadastrarProduto({codigo: 5, nome: "Notebook Dell", preco: 12300, estoque: 3, categoria: "eletronicos"}); // válido
cadastrarProduto({codigo: 6, nome: "Tênis Adidas", preco: 1200, estoque: 30, categoria: "calcados"}); // válido
cadastrarProduto({codigo: 7, nome: "Camiseta Nike", preco: 200, estoque: 30, categoria: "vestuario"}); // válido
cadastrarProduto({codigo: 8, nome: "Coca-Cola Lata 350 ml", preco: 8, estoque: 50, categoria: "alimentos"}); // válido
cadastrarProduto({codigo: 9, nome: "Pepsi Lata 350 ml", preco: 0, estoque: 50, categoria: "alimentos"}); // preco inválido
cadastrarProduto({codigo: 10, nome: "Sprite Lata 350 ml", preco: 7.5, estoque: 50, categoria: "alimentos"}); // inválido

console.log("");
console.log("");
listarProdutos();

console.log("");
console.log("***************************************");
console.log("Busca produtos pelo codigo 6");
console.log("***************************************");
console.log(buscarProdutoPeloCodigo(6));

console.log("");
console.log("***************************************");
console.log("Busca produtos pelo nome contendo: 'ta' ");
console.log("***************************************");
console.log(buscarProdutoPorNome("ta"));

console.log("");
console.log("***************************************");
console.log("Filtrar produtos pela categoria: 'eletronicos' ");
console.log("***************************************");
console.log(filtrarProdutoPorCategoria("eletronicos"));

console.log("");
console.log("***************************************");
console.log("Atualizar cadastro produto ID 1 ");
console.log("***************************************");
atualizarInformacoesProduto({codigo: 1, nome: "Teclado Com Nome Alterado", preco: 355.50, estoque: 15, categoria: "alimentos"})
listarProdutos();

console.log("");
console.log("***************************************");
console.log("Remover cadastro produto ID 10 ");
console.log("***************************************");
removerProduto(10)
listarProdutos();

console.log("");
console.log("***************************************");
console.log("Requisitos de clientes ");
console.log("***************************************");

console.log("***************************************");
console.log("Cadastrando clientes aplicando regras");
console.log("***************************************");

cadastrarCliente({id: 1, nome: "Pedro", email:  "c1@meail.com"});
cadastrarCliente({id: 1, nome: "Maria", email:  "c2@meail.com"}); // id duplicado
cadastrarCliente({id: 2, nome: "", email:  "c2@meail.com"}); // sem nome
cadastrarCliente({id: 3, nome: "José", email:  ""}); // sem email
cadastrarCliente({id: 4, nome: "Ana", email:  "ana@email.com"}); 
cadastrarCliente({id: 5, nome: "Paulo", email:  "c1@meail.com"}); // email duplicado
cadastrarCliente({id: 6, nome: "Nelson", email:  "nelson@meail.com"}); 
cadastrarCliente({id: 7, nome: "Wilson", email:  "wilson@meail.com"}); 

console.log("");
console.log("");
listarClientes();

console.log("***************************************");
console.log("Buscar clientes por ID");
console.log("***************************************");
console.log(buscarClientePeloID(1));

console.log("");
console.log("");

console.log("***************************************");
console.log("Adicionar um produto no carrinho");
console.log("***************************************");

let carrinho1: Carrinho;

const cliente1 = buscarClientePeloID(1);
if(cliente1) {
    carrinho1 = {
        id: 1,
        cliente: cliente1,
        itens: []
     };
     
    adicionarProdutoNoCarrinho(carrinho1, 1, 1);
    adicionarProdutoNoCarrinho(carrinho1, 6, 1);
    adicionarProdutoNoCarrinho(carrinho1, 7, -2);
    adicionarProdutoNoCarrinho(carrinho1, 8, 1);
    adicionarProdutoNoCarrinho(carrinho1, 6, 100);
    adicionarProdutoNoCarrinho(carrinho1, 1, 1);

    listarCarrinho(carrinho1);
    
    console.log("***************************************");
    console.log("Removendo um produto no carrinho");
    console.log("***************************************");
    removerProdutoDoCarrinho(carrinho1, 6);

    console.log("");
    console.log("");

    listarCarrinho(carrinho1);

    console.log("***************************************");
    console.log("Alterar a quantidade de um produto no carrinho");
    console.log("***************************************");
    alterarQuantidadeItem(carrinho1, 8, 5);
    alterarQuantidadeItem(carrinho1, 1, 0);

    console.log("");
    console.log("");

    listarCarrinho(carrinho1);
        
    console.log("");
    console.log("");
    console.log("***************************************");
    console.log("Finalizar compra: " + carrinho1.id);
    console.log("***************************************");

    registrarPedido(carrinho1);

    console.log(Pedidos);
    
} else {
    console.log(`Cliente não encontrado`)
}

/////////////////////////////////////////
let carrinhoV: Carrinho;

const clienteV = buscarClientePeloID(4);
if(clienteV) {
    carrinhoV = {
        id: 3,
        cliente: clienteV,
        itens: []
     };
        
    listarCarrinho(carrinhoV);
            
    console.log("");
    console.log("");
    console.log("***************************************");
    console.log("Finalizar compra: " + carrinhoV.id);
    console.log("***************************************");

    if(!registrarPedido(carrinhoV)) {
        console.log("***************************************");
        console.log("Não foi possível finalizar a compra");
        console.log("***************************************");
        console.log("");
        console.log("");
    };

    //console.log(Pedidos);
    
} else {
    console.log(`Cliente não encontrado`)
}

let carrinho2: Carrinho;

const cliente2 = buscarClientePeloID(4);
if(cliente2) {
    carrinho2 = {
        id: 2,
        cliente: cliente2,
        itens: []
     };
     
    adicionarProdutoNoCarrinho(carrinho2, 1, 1);
    adicionarProdutoNoCarrinho(carrinho2, 6, 10);
    adicionarProdutoNoCarrinho(carrinho2, 1, 1);

    listarCarrinho(carrinho2);
    
    console.log("***************************************");
    console.log("Removendo um produto no carrinho");
    console.log("***************************************");
    removerProdutoDoCarrinho(carrinho2, 6);

    console.log("");
    console.log("");

    listarCarrinho(carrinho2);

    console.log("***************************************");
    console.log("Alterar a quantidade de um produto no carrinho");
    console.log("***************************************");
    alterarQuantidadeItem(carrinho2, 8, 5);
    alterarQuantidadeItem(carrinho2, 1, 0);

    console.log("");
    console.log("");

    listarCarrinho(carrinho2);
        
    console.log("");
    console.log("");
    console.log("***************************************");
    console.log("Finalizar compra: " + carrinho2.id);
    console.log("***************************************");

    registrarPedido(carrinho2);

    //console.log(Pedidos);
    
} else {
    console.log(`Cliente não encontrado`)
}

//Consultar todos os pedidos
consultarPedidos(0);

//Consultar os pedidos do cliente 1
consultarPedidos(1);

listarProdutos();




