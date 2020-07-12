// Requireds
// const fileSystem = require('fs'); // ya existe en node, propio de node solo se define
// // const fileSystem = require('express');//  paquete q se instala, no son nativos de node se instala
// // const fileSystem = require('./fs'); // archivos q creamos y importamos
// const {crearArchivo} = require('./multiblicar/multiplicar')
const multiplicar = require("./multiblicar/multiplicar");
const yargArgv = require('./config/yargs').yargArgv;
var colors = require('colors');
// const yargArgv = require('yargs').command('primer parametro es comando q quiere ejecutar', 'informacion que se le da al usuario', 'tercer argumento un objeto recibe la configuacion de parametros o flags que ese comoando puede recibir') .argv;
// const yargArgv = require("yargs")
//   .command("listar", "Impime en consola la tabla de multiplicar", {
//     base: {
//       demand: true,
//       alias: 'b',
//     },
//     limite: {
//       alias: "l",
//       default: 10,
//     },
//   }).command("crear", "Crea en consola la tabla de multiplicar y genera un archivo", {
//     base: {
//       demand: true,
//       alias: 'b',
//     },
//     limite: {
//       alias: "l",
//       default: 10,
//     },
//   })
//   .help().argv;

// let base = "84";
let argv = process.argv;
let comandosIndependientes = yargArgv._[0];
// let yargBase = yargArgv.base;


let resultado = async () => {
  let resultado = await multiplicar.crearArchivo(yargArgv.base,  yargArgv.limite);
  return `${resultado}`;
};

let resultadoListar = async () => {
  let resultadoLimite = await multiplicar.listarTabla(yargArgv.base, yargArgv.limite);
  return `${resultadoLimite}`;
};

switch (comandosIndependientes) {
  case "listar":
    console.log("listar");
    resultadoListar()
    .then((res) => {
      console.log(`Archivo Listado: ${res.green}`);
    })
    .catch((err) => {
      console.log(err);
    });
    break;

  case "crear":
    console.log("crear");
    resultado()
      .then((res) => {
        console.log('Archivo creado'.green ,res);
      })
      .catch((err) => {
        console.log(err);
      });
    break;

  default:
    console.log("comoando no reconocido");
    break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// node app.js  --base=7 // mandar parametros por la consola

// console.log(module)
// console.log(process);// node ya tiene ese variable de entorno
// console.log(process.argv); //argumentos que tiene node en process, por defectos tiene dos la ubicacion de node y la ubicacion del archivo q se esta utilizando
// entry point  es el primer archivo de node q se ejecuta y despliega toda nuestra aplicacion
// console.log(base);
console.log("argv: ", argv);
console.log("yargArgv: ", yargArgv);
console.log("yargArgv comandos independientes: ", yargArgv);
console.log("yargArgv.base: ", yargArgv.base);
console.log("yargArgv.limite: ", yargArgv.limite);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     let resultado =  (base * element);
//     data = data +  `El resutado de ${base} * ${i} es: ${resultado}\n`;
//     console.log(`El resutado de ${base} * ${i} es: ${data}`)
// }

// // fileSystem.writeFile('tablas/nombreDelArchivo.txt', 'contenido a grabar', (callback) => {
// fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${base}.txt ha sido creada`);
// });

// multiplicar.crearArchivo(base).then((archivo)=>{ // con promesas  normales
//     console.log(`Archivo creado: ${archivo}`);
// }).catch((err)=>{
//     console.log(err);
// });

// console.log(multiplicar)

// let resultado = async () => {
//   let resultado = await multiplicar.crearArchivo(yargArgv.base);
//   return `${resultado}`;
// };

// resultado()
//   .then((res) => {
//     console.log(`Archivo creado: ${res}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
