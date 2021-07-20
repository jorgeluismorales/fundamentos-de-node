const { crearArchivo } = require("./crearArchivo");
const argv = require("yargs").argv;

console.log(argv);

const base = argv.base;

let resultado = "";

for (j = 1; j < 11; j++) {
  resultado += `${base} x ${j} = ${base * j}\n `;
}

crearArchivo(resultado, base)
  .then((msj) => console.log(msj))
  .catch((msj) => console.log(msj));
