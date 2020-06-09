const fs = require("fs");
const color = require("colors");

let Listar_tabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("Base no es un numero!");
            return;
        }

        console.log("-----------------".green);
        console.log(`Tabla del ${base} al ${limite}`.green);
        console.log("-----------------".green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }

        resolve(`Se ha mostrado la tabla del ${base}-al-${limite}`);

    });
};

let Crear_archivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("Base no es un numero!");
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            console.log("tabla creada");
        });
    });

};

module.exports = {
    Crear_archivo,
    Listar_tabla
};