import _ from "lodash";
import { datos } from "./datos.js";

// 1. Utiliza el método uniq() para obtener un Array de elementos únicos desde la variable
//autos, y guarda el resultado en una variable en tu archivo index.js.
const autosUnicos = _.uniq(datos.autos);

// 2. Utiliza el método find() para obtener todos los animales de tipo salvaje de la variable
//animales, y guarda el resultado en una variable en tu archivo index.js
const primerAnimalSalvaje = _.find(datos.animales, ["tipo", "salvaje"]);

//Comentario: El método find() solo entrega el primer elemento encontrado bajo la cláusula de búsqueda,
//por lo que para obtener el array de todos los animales salvajes fue necesario utilizar el método filter()
const animalesSalvajes = _.filter(datos.animales, ["tipo", "salvaje"]);

// .3 Muestra por consola el resultado contenido en las variables creadas

console.log(autosUnicos);
console.log(primerAnimalSalvaje);
console.log(animalesSalvajes);
