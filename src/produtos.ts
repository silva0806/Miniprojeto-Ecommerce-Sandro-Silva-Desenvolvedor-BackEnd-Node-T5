import type { Produto } from "./types";

export const produtos: Produto[] = [];

export function buscarProdutoPeloCodigo(codigo: number): Produto | undefined {
  return produtos.find(produto => produto.codigo === codigo);
}

export function buscarProdutoPorNome(nome: string): Produto[] {
    return produtos.filter(produto => produto.nome.includes(nome));

}

export function validarEstoqueProduto(produto: Produto): boolean {
    return (produto.estoque >= 0);
}

export function validarPrecoProduto(produto: Produto): boolean {
    return (produto.preco > 0);
}

export function cadastrarProduto(produto: Produto): boolean {
  const existente = buscarProdutoPeloCodigo(produto.codigo);

  if(existente !== undefined) {
    console.log(`Já existe um produto com o código: ${produto.codigo}`);
    return false;
  }

  if(produto.nome.length <= 0) {
    console.log(`Informe um Nome válido para o produto: "${produto.nome}"`);
    return false;
  }
  
  if(!validarPrecoProduto(produto)) {
    console.log(`Produto ${produto.nome} com Preço inválido`);
    return false;
  }

  if(!validarEstoqueProduto(produto)) {
    console.log(`Produto ${produto.nome} com Estoque inválido`);
    return false;    
  }

  produtos.push(produto);
  console.log(`Produto ${produto.nome} foi adicionado`);
  return true;

}

export function atualizarInformacoesProduto(produto: Produto): boolean {
    const prod = buscarProdutoPeloCodigo(produto.codigo);

  if(prod === undefined) {
    console.log(`Produto ${produto.nome} não localizado`);
    return false;
  }

  if(!validarEstoqueProduto(produto)){
    console.log(`Produto ${produto.nome} com estoque inválido`);
    return false;
  }

  if(!validarPrecoProduto(produto)){
    console.log(`Produto ${produto.nome} com preço inválido`);
    return false;
  }

  prod.nome = produto.nome; 
  prod.categoria = produto.categoria;
  prod.estoque = produto.estoque;
  prod.preco = produto.preco;    

  console.log(`Produto ${produto.codigo} atualizado`);

  return true;

}

export function removerProduto(codigo: number): boolean {
  const produtoExistente = buscarProdutoPeloCodigo(codigo);

  if (produtoExistente === undefined) {
    console.log(`Produto com código ${codigo} não localizado`);
    return false;
  }

  const index = produtos.findIndex(produto => produto.codigo === codigo);
  if (index !== -1) {
    produtos.splice(index, 1);
    console.log(`Produto ${produtoExistente.nome} foi removido com sucesso`);
    return true;
  }

  return false;
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

export function atualizarEstoque(codigoProduto: number, quantidade: number): boolean {

    let produto = buscarProdutoPeloCodigo(codigoProduto);

    if(produto == undefined) {
        console.log(`Produto ${codigoProduto} não encontrado`); 
        return false;
    }
 
    produto.estoque -= quantidade;

    return true
}