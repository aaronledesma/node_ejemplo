/*****/

const argv = require("./config/yargs").argv;
const color = require("colors");

const { Crear_archivo, Listar_tabla } = require("./multiplicar/multiplicar")

let comando = argv._[0]

switch (comando) {
    case "listar":
        Listar_tabla(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;

    case "crear":
        Crear_archivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + `${archivo}`.green))
            .catch(err => console.log(err));

        break;

    default:
        console.log("Comando no reconocido");
}