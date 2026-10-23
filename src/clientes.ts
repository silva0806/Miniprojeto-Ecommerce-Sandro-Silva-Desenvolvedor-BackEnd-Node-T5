import type { Cliente } from "./types";

export const clientes: Cliente[] = [];

export function buscarClientePeloID(id: number): Cliente | undefined {
  return clientes.find(cliente => cliente.id === id);
}

// export validarEmail(cliente: Cliente): boolean {
//     return ((cliente.email.indexOf("@") !== -1) && (cliente.email.indexOf(".") !== -1));
// }

export function validarEmail(email: string): boolean {
    return ((email.indexOf("@") !== -1) && (email.indexOf(".") !== -1));
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

  if(cliente.nome.length <= 0) {
    console.log(`Informe um Nome válido para o cliente: "${cliente.nome}"`);
    return false;
  }

  if(!validarEmail(cliente.email)) {
    console.log(`Informe um email válido para o cliente: "${cliente.nome}"`);
    return false;
  }

  clientes.push(cliente);
  console.log(`Cliente ${cliente.nome} cadastrado!`);
  
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