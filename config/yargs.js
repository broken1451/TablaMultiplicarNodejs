const opciones ={
    base: {
        demand: true,
        alias: 'b',
      },
      limite: {
        alias: "l",
        default: 10,
      }
}


const yargArgv = require("yargs")
  .command("listar", "Impime en consola la tabla de multiplicar", opciones).command("crear", "Crea en consola la tabla de multiplicar y genera un archivo", opciones)
  .help().argv;

  module.exports = {
    yargArgv:yargArgv
  }