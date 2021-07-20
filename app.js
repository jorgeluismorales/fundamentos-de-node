const argv = require("./config/yargs").argv;
const colors = require("colors");
const { crearArchivo } = require("./crearArchivo");
console.log(argv);

const base = argv.base;
console.log(`base: ${base}`);

console.log("==================".cyan);
console.log(`tabla de ${base}`.red);
console.log("==================".cyan);

let resultado = "";
let resultadoConColor = "";

for (j = 1; j < 11; j++) {
  resultadoConColor += `${colors.yellow(base)} ${"x".blue} ${colors.bgMagenta(
    j
  )} ${"=".green} ${base * j}\n `;
}

for (j = 1; j < 11; j++) {
  resultado += `${base} x ${j} = ${base * j}\n `;
}

console.log(resultadoConColor);

crearArchivo(resultado, base)
  .then((msj) => console.log(msj))
  .catch((msj) => console.log(msj));
