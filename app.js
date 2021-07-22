const argv = require("./config/yargs").argv;
const colors = require("colors");
const { crearArchivo } = require("./crearArchivo");
console.log(argv);

const base = argv.base;
const listar = argv.listar;
console.log(`base: ${base}`);

{
  listar && console.log("==================".cyan);
  listar && console.log(`tabla de ${base}`.red);
  listar && console.log("==================".cyan);
}

let resultado = "";
let resultadoConColor = "";

for (let j = 1; j < 11; j++) {resultadoConColor += `${colors.yellow(base)} ${"x".blue} ${colors.bgMagenta(j)} ${"=".green} ${base * j}\n `;}

for (let j = 1; j < 11; j++) {resultado += `${base} x ${j} = ${base * j}\n `;
}

{
  listar && console.log(resultadoConColor);
}

crearArchivo(resultado, base).then((msj) => console.log(msj)).catch((msj) => console.log(msj));
