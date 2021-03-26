console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belory Hills`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);
const destino = "Salvador";
let destinoExiste = false;

const podeComprar = (idadeComprador >= 18 || estaAcompanhada)

let contador = 0;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existente.");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ") + destinoExiste;

if (podeComprar && destinoExiste) {
    console.log("Boa bviagem.");
} else {
    console.log("Desculpe, houve um erro");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}