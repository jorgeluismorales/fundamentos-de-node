const { crearArchivo } = require("./crearArchivo");

console.log(process.argv);

const [, , param] = process.argv;
const [, base = 5] = param.split("=");

console.log(base);

let resultado = "";

for (j = 1; j < 11; j++) {
  resultado += `${base} x ${j} = ${base * j}\n `;
}

crearArchivo(resultado, base)
  .then((msj) => console.log(msj))
  .catch((msj) => console.log(msj));
