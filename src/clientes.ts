import type { Cliente } from "./types";

export const clientes: Cliente[] = [];

export function buscarClientePeloID(id: number): Cliente | undefined {
  return clientes.find(cliente => cliente.id === id);
}

export function cadastrarCliente(cliente: Cliente): boolean {
  let existente = buscarClientePeloID(cliente.id);    

  if(existente != undefined) {
    console.log(`Já existe um cliente com o id: ${cliente.id}`);
    return false;
  }

  existente = clientes.find(cadastro => cadastro.email === cliente.email);    

  if(existente != undefined) {
    console.log(`Já existe um cliente com o email: ${cliente.email}`);
    return false;
  }

  return true;
}

export function listarClientes(): void {
    console.log("***************************************");
    console.log("Listagem de Clientes");
    console.log("***************************************");
    console.log("ID | Nome             | email");    
  for (const cliente of clientes) {
    console.log(
      `${cliente.id} | ` +
      `${cliente.nome} | ` +      
      `${cliente.email}`
    )
  }
  console.log("***************************************");
}