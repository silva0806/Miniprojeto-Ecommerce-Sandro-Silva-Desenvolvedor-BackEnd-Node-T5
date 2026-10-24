import { Item, Cliente } from "./types";
import { buscarProdutoPeloCodigo, atualizarEstoque } from "./produtos";
import { Carrinho, calcularSubtotalItem } from "./carrinho";
import { buscarClientePeloID } from "./clientes";

export type Pedido = {
  id: number;
  cliente: Cliente;
  itens: Item[];
  total: number;
  data: string;
}

export const Pedidos: Pedido[] = [];

export function registrarPedido(carrinho: Carrinho): boolean {
    if(carrinho.itens.length <= 0) {
        console.log(`O carrinho está vazio`);
        return false;
    }

    if(buscarClientePeloID(carrinho.cliente.id) == undefined) {
        console.log(`O Cliente ${carrinho.cliente.nome} não encontrado`);
        return false;
    }    
          
    const pedido: Pedido = {
        id: Pedidos.length + 1,
        cliente: carrinho.cliente,        
        itens: carrinho.itens.map(item => ({ ...item })), // https://www.luiztools.com.br/post/4-segredos-do-operador-spread-em-javascript/
        total: 0,
        data: new Date().toLocaleDateString("pt-BR") //fonte: https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript
    }

    let estoqueSuficiente: boolean = true;
    for (const item of pedido.itens) {
        const produto = buscarProdutoPeloCodigo(item.codigo);
        if(produto == undefined) {
            estoqueSuficiente = false;
            break;
        }
        if((produto.estoque - item.quantidade) < 0) {
            console.log(`Produto ${produto.nome} com Estoque insuficiente.`);
            estoqueSuficiente = false;
            break;
        }       
    }   

    if(!estoqueSuficiente) {
        console.log(`Pedido não foi gravado`);
        return false;
    }

    //totaliza o pedido
    pedido.total = pedido.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);

    Pedidos.push(pedido);

    for (const item of pedido.itens) {
        atualizarEstoque(item.codigo, item.quantidade);
    }   

    return true;
}

// método para listar os pedidos
// se argumento for <= 0 [lista todos pedidos]; maior 0 [lista o pedido do cliente]
export function consultarPedidos(idCliente: number): void {
    console.log("***********************************************");
    console.log("Listagem de pedidos");
    console.log("***********************************************");

    let pedidos = Pedidos;
    if (idCliente > 0) {
        pedidos = Pedidos.filter(pedido => pedido.cliente.id === idCliente);             
    }

    if (pedidos.length === 0) {
        console.log("Nenhum pedido encontrado");
        return;
    }
    
    for (const pedido of pedidos) {
        console.log("***********************************************");
        console.log(`Pedido: ${pedido.id}      Data: ${pedido.data}`);
        console.log(`Cliente:  ${pedido.cliente.id} -  ${pedido.cliente.nome}`);

        console.log("***********************************************");
        console.log("Código | Nome       | Qtd | Preço   | Subtotal");
        console.log("***********************************************");

        let total: number = 0.00;
        let subtotal: number = 0.00;
        for (const itens of pedido.itens) {
            //const 
            subtotal = calcularSubtotalItem(itens);
            total += subtotal;
            console.log(
                `${itens.codigo} | ` +
                `${itens.nome} | ` +
                `${itens.quantidade} | ` +
                `${itens.preco.toFixed(2)} | ` +
                `${subtotal.toFixed(2)}`
            );            
        }

        console.log("***********************************************");
        console.log("Total: " + total.toFixed(2) );
        console.log("***********************************************");
    }
}
