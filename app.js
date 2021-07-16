const { crearArchivo } = require("./crearArchivo");

let resultado = "";

const i = 5;
for (j = 1; j < 11; j++) {
  resultado += `${i} x ${j} = ${i * j}\n `;
}

crearArchivo(resultado)
  .then((msj) => console.log(msj))
  .catch((msj) => console.log(msj));
