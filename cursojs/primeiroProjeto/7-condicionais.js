console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belory Hills`
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(0, 1); //remover salvador rsrs
// } else if (estaAcompanhada) {
//     console.log("Comprador menor de idade porém está acompanhado. Venda executada");
//     listaDeDestinos.splice(0, 1); //remover salvador rsrs

// } else {
//     console.log("Comprador menor de idade e desacompanhado. Não é possível executar a venda!");

// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(0, 1); //remover salvador rsrs
} else {
    console.log("Comprador menor de idade e desacompanhado. Não é possível executar a venda!");

}