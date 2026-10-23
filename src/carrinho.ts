import type { Item, Cliente } from "./types";

export const Itens: Item[] = [];

export type carrinho = {
  id: number;
  cliente: Cliente;
  itens: Item[];
}
