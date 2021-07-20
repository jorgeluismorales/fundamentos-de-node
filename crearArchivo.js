fs = require("fs");
const colors = require("colors");

const crearArchivo = (data, base) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`tabla-${base}.txt`, data, function (err) {
      if (err) reject("Error al crear el archivo.".red);
      else resolve("El archivo fue creado con éxito.".blue);
    });
  });
};

module.exports = {
  crearArchivo,
};
