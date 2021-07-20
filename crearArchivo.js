fs = require("fs");

const crearArchivo = (data, base) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`tabla-${base}.txt`, data, function (err) {
      if (err) reject("Error al crear el archivo.");
      else resolve("El archivo fue creado con éxito.");
    });
  });
};

module.exports = {
  crearArchivo,
};
