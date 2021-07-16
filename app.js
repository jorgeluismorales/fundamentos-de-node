fs = require("fs");

let resultado = "";

const i = 5;
for (j = 1; j < 11; j++) {
  resultado += `${i} x ${j} = ${i * j}\n `;
}

fs.writeFile("tabla-5.txt", resultado, function (err) {
  if (err) return console.log(err);
  console.log("archivo creado");
});
