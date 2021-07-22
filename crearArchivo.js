fs = require("fs");
const path = require("path");
const colors = require("colors");

const crearArchivo = (data, base) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, "salida", `tabla-${base}.txt`),
      data,
      function (err) {
        if (err) reject("Error al crear el archivo.".red);
        else resolve("El archivo fue creado con éxito.".blue);
      }
    );
  });
};

module.exports = {
  crearArchivo,
};
