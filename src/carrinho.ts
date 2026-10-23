import type { Itens, Item, Cliente, Produto } from "./types";
import { buscarProdutoPeloCodigo } from "./produtos";

//export const Itens: Item[] = [];

export type Carrinho = {
  id: number;
  cliente: Cliente;
  itens: Item[];
}

// Validações específicas do carrinho
function validarQuantidade(quantidade: number): boolean {
  return quantidade > 0;
}

// Validar se tem estoque disponível para vender o produto
function validarEstoqueDisponivel(produto: Produto, 
    quantidade: number): boolean {
  return produto.estoque >= quantidade;
}

// Buscar item no carrinho
function buscarItemNoCarrinho(carrinho: Carrinho, codigoProduto: number): Item | undefined {
  return carrinho.itens.find(item => item.codigo === codigoProduto);
}

// Adicionar ou atualizar quantidade
export function adicionarProdutoNoCarrinho(
  carrinho: Carrinho, 
  codigoDoProduto: number, 
  quantidade: number
): boolean {
  // Validações
  const produto = buscarProdutoPeloCodigo(codigoDoProduto);

  if(!produto) {
    console.log('Produto ${codigoProduto} não encontrado');
    return false
  }

  if (!validarQuantidade(quantidade)) {
    console.log("Quantidade deve ser maior que zero");
    return false;
  }

  if (!buscarProdutoPeloCodigo(produto.codigo)) {
    console.log("Produto não existe no sistema");
    return false;
  }

  if (!validarEstoqueDisponivel(produto, quantidade)) {
    console.log(`Produto ${produto.codigo} - ${produto.nome} com estoque insuficiente. Disponível: ${produto.estoque}`);
    return false;
  }

  // Verificar se já existe no carrinho
  const itemDoCarrinho = buscarItemNoCarrinho(carrinho, produto.codigo);
  
  if (itemDoCarrinho) {
    const novaQuantidade = itemDoCarrinho.quantidade + quantidade;
    
    if (!validarEstoqueDisponivel(produto, novaQuantidade)) {
      console.log(`Produto ${produto.codigo} - ${produto.nome} com estoque insuficiente. Disponível: ${produto.estoque}`);
      return false;
    }
    
    itemDoCarrinho.quantidade = novaQuantidade;
    console.log(`Quantidade do produto ${produto.codigo} - ${produto.nome} atualizada para ${novaQuantidade}`);
  } else {
    const novoItem: Item = {
      codigo: produto.codigo,
      nome: produto.nome,
      quantidade: quantidade,
      preco: produto.preco
    };
    carrinho.itens.push(novoItem);
    console.log(`Produto ${produto.nome} adicionado ao carrinho`);
  }

  return true;
}

export function removerProdutoDoCarrinho(
  carrinho: Carrinho, 
  codigoProduto: number
): boolean {
  const index = carrinho.itens.findIndex(item => item.codigo === codigoProduto);

  if (index === -1) {
    console.log(`Produto com código ${codigoProduto} não encontrado no carrinho`);
    return false;
  }

  const itemRemovido = carrinho.itens[index];
  if(!itemRemovido) {
     console.log(`Item não encontrado no carrinho`);
     return false;
  }

  carrinho.itens.splice(index, 1);
  console.log(`Produto ${itemRemovido.nome} removido do carrinho`);
  return true;
  
}

// Alterar quantidade
export function alterarQuantidadeItem(
  carrinho: Carrinho, 
  codigoProduto: number, 
  novaQuantidade: number
): boolean {
  
  const item = buscarItemNoCarrinho(carrinho, codigoProduto);

  if (!item) {
    console.log(`Produto com código ${codigoProduto} não encontrado no carrinho`);
    return false;
  }  

  if (!validarQuantidade(novaQuantidade)) {
    console.log(`Quantidade do produto ${item.nome} deve ser maior que zero`);
    return false;
  }

  item.quantidade = novaQuantidade;
  console.log(`Quantidade do produto ${item.nome} alterada para ${novaQuantidade}`);
  return true;
}

// Calcular subtotal de um item
export function calcularSubtotalItem(item: Item): number {
  return item.preco * item.quantidade;
}

// Calcular total do carrinho
export function calcularTotalCarrinho(carrinho: Carrinho): number {
  return carrinho.itens.reduce((total, item) => {
    return total + calcularSubtotalItem(item);
  }, 0);
}

// Lista os dados do cabeçalho do carrinho
export function listarCabecalhoCarrinho(carrinho: Carrinho): void {
    console.log("***************************************");
    console.log("Dados do cliente");
    console.log("***************************************");
    console.log("ID: " + carrinho.cliente.id);
    console.log("Nome: " + carrinho.cliente.nome);
    console.log("email: " + carrinho.cliente.email);
}

// Listar itens do carrinho
export function listarItensCarrinho(carrinho: Carrinho): void {
  console.log("***************************************");
  console.log("Itens do Carrinho");
  console.log("***************************************");
  console.log("Código | Nome       | Qtd | Preço   | Subtotal");

  for (const item of carrinho.itens) {
    const subtotal = calcularSubtotalItem(item);
    console.log(
      `${item.codigo} | ` +
      `${item.nome} | ` +
      `${item.quantidade} | ` +
      `${item.preco.toFixed(2)} | ` +
      `${subtotal.toFixed(2)}`
    );
  }

  const total = calcularTotalCarrinho(carrinho);
  console.log("***************************************");
  console.log(`Total: R$ ${total.toFixed(2)}`);
  console.log("***************************************");
}

export function listarCarrinho(carrinho: Carrinho): void {
    console.log("***************************************");
    console.log(`Dados do carrinho de compras`);
    listarCabecalhoCarrinho(carrinho);
    listarItensCarrinho(carrinho);    
}