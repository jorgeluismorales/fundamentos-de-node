const argv = require("./config/yargs").argv;
const { crearArchivo } = require("./crearArchivo");
console.log(argv);

const base = argv.base;
console.log(`base: ${base}`);

let resultado = "";

for (j = 1; j < 11; j++) {
  resultado += `${base} x ${j} = ${base * j}\n `;
}

crearArchivo(resultado, base)
  .then((msj) => console.log(msj))
  .catch((msj) => console.log(msj));
