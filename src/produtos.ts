import type { Produto } from "./types";

export const produtos: Produto[] = [];

export default function buscarProdutoPeloCodigo(codigo: number): Produto | undefined {
  return produtos.find(produto => produto.codigo === codigo);
}

export function buscarProdutoPorNome(nome: string): Produto [] {
    return produtos.filter(produto => produto.nome.includes(nome));

}

export function cadastrarProduto(produto: Produto): boolean {
  const existente = buscarProdutoPeloCodigo(produto.codigo);

  if(existente != undefined) {
    console.log(`Já existe um produto com o código: ${produto.codigo}`);
    return false;
  }

  if(produto.nome.length <= 0) {
    console.log(`Nome inválido para o produto: "${produto.nome}"`);
    return false;
  }

  if(produto.preco <= 0) {
    console.log(`Produto ${produto.nome} com Preço inválido`);
    return false;
  }

  if(produto.estoque < 0) {
    console.log(`Produto ${produto.nome} com Estoque inválido`);
    return false;    
  }

  produtos.push(produto);
  console.log(`Produto ${produto.nome} foi adicionado`);
  return true;

}

export function listarProdutos(): void {
    console.log("***************************************");
    console.log("Listagem de Produtos");
    console.log("***************************************");
    console.log("Codigo | Nome       | Preço   | Estoque");    
  for (const produto of produtos) {
    console.log(
      `${produto.codigo} | ` +
      `${produto.nome} | ` +
      `${produto.preco.toFixed(2)} | ` +
      `${produto.estoque}`
    )
  }
  console.log("***************************************");
}

export function filtrarProdutoPorCategoria(categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}