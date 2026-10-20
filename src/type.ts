export type Categoria = "eletronicos" | "alimentos" | "vestuario";

export type Produto = {
  codigo: number;
  nome: string;
  categoria: Categoria;
  preco: number;
  estoque: number;  
}

export type Cliente = {
    id: number;
    nome: string;
    email: string;
}

