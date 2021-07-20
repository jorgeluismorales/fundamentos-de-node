const { options } = require("yargs");
const { crearArchivo } = require("./crearArchivo");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    let base = argv.base;
    if (isNaN(base)) throw Error("La base tiene que ser un numero");
    else if (!(base >= 1 && base <= 20))
      throw Error("Debes colocar un valor de base entre 1 y 20");
    else return true;
  }).argv;

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
