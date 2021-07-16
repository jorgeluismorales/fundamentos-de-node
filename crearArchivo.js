fs = require("fs");

const crearArchivo = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("tabla-5.txt", data, function (err) {
      if (err) reject("Error al crear el archivo.");
      else resolve("El archivo fue creado con éxito.");
    });
  });
};

module.exports = {
  crearArchivo,
};
