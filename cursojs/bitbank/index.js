import {
    Cliente
} from "./Cliente.js";
import {
    Gerente
} from "./Funcionarios/Gerente.js"
import {
    Diretor
} from "./Funcionarios/Diretor.js"
import {
    SistemadeAutenticacao
} from "./SistemadeAutenticacao.js"

const diretor = new Diretor("Tom", 11000, 12545458451);
diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Gusta", 4500, 24242424224);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 78484848484, "456");
const diretorLogado = SistemadeAutenticacao.login(diretor, 123456789);
const gerenteLogado = SistemadeAutenticacao.login(gerente, 123);
const clienteLogado = SistemadeAutenticacao.login(cliente, 456);

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);















// import{ContaCorrente} from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 12121232369);

// const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// ContaCorrenteRicardo.depositar(500);

// const ContaSalario = new ContaSalario(cliente1, 1001);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// console.log(ContaCorrenteRicardo);
// console.log(contaPoupanca);