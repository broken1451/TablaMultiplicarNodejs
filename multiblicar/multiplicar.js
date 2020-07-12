const fileSystem = require("fs"); // ya existe en node, propio de node solo se define
// const fileSystem = require('express');//  paquete q se instala, no son nativos de node se instala
// const fileSystem = require('./fs'); // archivos q creamos y importamos
var colors = require("colors");

// module.exports.crearArchivo = (base) => {
// let crearArchivo = (base) => { // con promesas  normales
//   return new Promise((resolve, reject) => {

//     if (!Number(base)) {
//       // throw new Error(`La base ${base} no es un numero`)
//       reject(`La base introducida ${base} no es un numero`);
//       return;
//     }

//     let data = "";

//     for (let i = 1; i <= 10; i++) {
//       const element = i;
//       let resultado = base * element;
//       data = data + `El resutado de ${base} * ${i} es: ${resultado}\n`;
//       console.log(`El resutado de ${base} * ${i} es: ${data}`);
//     }

//     // fileSystem.writeFile('tablas/nombreDelArchivo.txt', 'contenido a grabar', (callback) => {
//     fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//       if (err) {
//         reject(err);
//       } else {
//         resolve(`tabla-${base}.txt`);
//       }
//       // console.log(`tabla-${base}.txt ha sido creada`);
//     });
//   });
// };

// con async y await

let crearArchivo = async (base, limit = 10) => {
  // con async y await

  if (!Number(base)) {
    // throw new Error(`La base ${base} no es un numero`)
    throw new Error(`La base introducida ${base} no es un numero`);
    // return;
  }

  let data = "";

  for (let i = 1; i <= limit; i++) {
    const element = i;
    let resultado = base * element;
    data = data + `El resutado de ${base} * ${i} es: ${resultado}\n`;
    console.log(`${data}`);
  }

  // fileSystem.writeFile('tablas/nombreDelArchivo.txt', 'contenido a grabar', (callback) => {
  fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      return console.log(`tabla-${base}.txt ha sido creada`);
    }
    // console.log(`tabla-${base}.txt ha sido creada`);
  });
  return data;
};

let listarTabla = async (base, limite = 10) => {
  // con async y await
  console.log("==========================".green);
  console.log(`Tabla de ${base}`.green);
  console.log("==========================".green);
  for (let i = 1; i <= limite; i++) {
    const element = i;
    let resultado = base * element;
    console.log(`La base  ${base} * ${element} es: ${resultado}\n`);
  }
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla,
};
