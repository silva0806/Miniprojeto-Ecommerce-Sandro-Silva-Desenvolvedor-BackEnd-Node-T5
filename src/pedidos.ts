import type { Itens, Item, Cliente, Produto } from "./types";
import { buscarProdutoPeloCodigo } from "./produtos";
import { Carrinho } from "./carrinho";
import { buscarClientePeloID } from "./clientes";


export type Pedidos = {
  id: number;
  cliente: Cliente;
  itens: Item[];
  total: number;
  data: string;
}

function registrarPedido(carrinho: Carrinho): boolean {
    if(carrinho.itens.length <= 0) {
        console.log(`O carrinho está vazio`);
        return false;
    }

    if(buscarClientePeloID(carrinho.cliente.id) == undefined) {
        console.log(`O Cliente ${carrinho.cliente.nome} não encontrado`);
        return false;
    }
    
    return true;

}