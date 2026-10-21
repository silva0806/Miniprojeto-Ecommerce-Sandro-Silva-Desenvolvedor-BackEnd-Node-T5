// definição dos tipos utilizados pelo sistema
export type Categoria = "eletronicos" | "alimentos" | "vestuario" | "calcados";

export type Produto = {
  codigo: number;
  nome: string;
  categoria: Categoria;
  preco: number;
  estoque: number;  
};

export type Cliente = {
    id: number;
    nome: string;
    email: string;
};

