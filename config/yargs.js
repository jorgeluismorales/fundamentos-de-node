const { options } = require("yargs");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false
  })
  .check((argv, options) => {
    let base = argv.base;
    if (isNaN(base)) throw Error("La base tiene que ser un numero");
    else if (!(base >= 1 && base <= 20))
      throw Error("Debes colocar un valor de base entre 1 y 20");
    else return true;
  })
  .command(
    "base",
    "Base usada para generar la tabla de multiplicar correspondiente",
    options
  )
  .help().argv;

module.exports = {
  argv,
};
