import buscarProdutoPeloCodigo from "./produtos";
import buscarProduto, { cadastrarProduto, listarProdutos, buscarProdutoPorNome , filtrarProdutoPorCategoria} from "./produtos";

console.log("***************************************");
console.log("Requisitos produtos");
console.log("***************************************");

console.log("***************************************");
console.log("Cadastrando produtos aplicando regras");
console.log("***************************************");

cadastrarProduto({codigo: 1, nome: "Teclado sem fio", preco: 300, estoque: 10, categoria: "eletronicos"});
cadastrarProduto({codigo: 1, nome: "Mouse sem fio", preco: 150, estoque: 10, categoria: "eletronicos"});
cadastrarProduto({codigo: 3, nome: "", preco: 150, estoque: 10, categoria: "eletronicos"});
cadastrarProduto({codigo: 4, nome: "Monitor", preco: 800, estoque: -1, categoria: "eletronicos"});
cadastrarProduto({codigo: 5, nome: "Notebook Dell", preco: 12300, estoque: 3, categoria: "eletronicos"});
cadastrarProduto({codigo: 6, nome: "Tênis Adidas", preco: 1200, estoque: 30, categoria: "calcados"});
cadastrarProduto({codigo: 7, nome: "Camiseta Nike", preco: 200, estoque: 30, categoria: "vestuario"});
cadastrarProduto({codigo: 8, nome: "Coca-Cola Lata 350 ml", preco: 8, estoque: 50, categoria: "alimentos"});

console.log("");
console.log("");
listarProdutos();

console.log("");
console.log("***************************************");
console.log("Busca produtos pelo codigo 6");
console.log("***************************************");
console.log(buscarProdutoPeloCodigo(6));

console.log("");
console.log("***************************************");
console.log("Busca produtos pelo nome contendo: 'ta' ");
console.log("***************************************");
console.log(buscarProdutoPorNome("ta"));

console.log("");
console.log("***************************************");
console.log("Filtrar produtos pela categoria: 'eletronicos' ");
console.log("***************************************");
console.log(filtrarProdutoPorCategoria("eletronicos"));