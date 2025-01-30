// 1. Escribe un comentario en una línea

// "Hola Mundo"

// 2. Escribe un comentario en varias líneas

/*
    "Hola Mundo"
    "Adios Mundo"
*/

/*
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let a = 1;
let b = "2";
let c = true;
let d = false;
let e = null;
let f = undefined;

// 4. Imprime por consola el valor de todas las variables

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
a = 2;
b = "3";
c = false;
d = true;
e = undefined;
f = null;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
a = "1";
b = 1;
c = "true";
d = false;
e = null;
f = undefined;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const g = 1;
const h = "2";
const i = true;
const j = false;
const k = null;
const l = undefined;

// 9. A continuación, modifica los valores de las constantes
// g = 2;
// h = "3";
// i = false;
// j = true;
// k = undefined;
// l = null;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// 1. Crea una variable para cada operación aritmética

let suma = 1 + 2;
let resta = 10 - 5;
let multiplicacion = 3 * 4;
let division = 10 / 2;
let modulo = 10 % 3;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma 

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(1 < 2);
console.log(2 > 1);
console.log(1 <= 2);
console.log(2 >= 1);
console.log(1 != 2);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(1 > 2);
console.log(2 < 1);
console.log(1 >= 2);
console.log(2 <= 1);
console.log(1 == 2);

// 5. Utiliza el operador lógico and

console.log(1 < 2 && 2 > 1);

// 6. Utiliza el operador lógico or

console.log(1 < 2 || 1 > 2);

// 7. Combina ambos operadores lógicos

console.log(1 < 2 && 1 > 2 || 1 != 2);

// 8. Añade alguna negación

console.log(!(1 < 2 && 1 > 2 || 1 != 2));

// 9. Utiliza el operador ternario

let ternario = 1 < 2 ? "Verdadero" : "Falso";

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(1 < 2 && 1 > 2 || 1 != 2 ? "Verdadero" : "Falso");

// 1. Concatena dos cadenas de texto

let concatenacion = "Hola " + "Mundo";
console.log(concatenacion);

// 2. Muestra la longitud de una cadena de texto

let longitud = concatenacion.length;
console.log(longitud);

// 3. Muestra el primer y último carácter de un string

let primer = concatenacion[0];
let ultimo = concatenacion[longitud - 1];
console.log(primer);
console.log(ultimo);

// 4. Convierte a mayúsculas y minúsculas un string

let mayusculas = concatenacion.toUpperCase();
let minusculas = concatenacion.toLowerCase();
console.log(mayusculas);
console.log(minusculas);

// 5. Crea una cadena de texto en varias líneas

let varias = `Hola
Mundo`;
console.log(varias);

// 6. Interpola el valor de una variable en un string

let nombre = "José"
let interpolado = `Hola ${nombre}`;
console.log(interpolado);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let reemplazados = interpolado.replace(" ", "-");
console.log(reemplazados);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let palabra = "Mundo";
let contiene = interpolado.includes(palabra);
let contiene2 = varias.includes("Mundo");
console.log(contiene);
console.log(contiene2);

// 9. Comprueba si dos strings son iguales

let iguales2 = "Hola José";
let iguales = interpolado == iguales2;
console.log(iguales);

// 10. Comprueba si dos strings tienen la misma longitud

let longitud1 = interpolado.length;
let longitud2 = iguales2.length;
let comparación = longitud1 == longitud2 ? "Igual" : "Diferente";
console.log(comparación);

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "José";
if (nombre == "José") {
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "joserobertoq@outlook.com";
let contraseña = "2Hidroxil@";
if (usuario == "joserobertoq@outlook.com" && contraseña == "2Hidroxil@") {
    console.log("Correcto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 19;
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
    console.log(`Le faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let adulto = edad >= 18 ? "Adulto" : "Menor";
console.log(adulto);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1;

if (mes == 1) {
    console.log("Invierno");
} else if (mes == 2) {
    console.log("Primavera");
} else if (mes == 3) {
    console.log("Primavera");
} else if (mes == 4) {
    console.log("Verano");
} else if (mes == 5) {
    console.log("Verano");
} else if (mes == 6) {
    console.log("Otoño");
} else if (mes == 7) {
    console.log("Otoño");
} else if (mes == 8) {
    console.log("Verano");
} else if (mes == 9) {
    console.log("Otño");
} else if (mes == 10) {
    console.log("Otoño");
} else if (mes == 11) {
    console.log("Invierno");
} else if (mes == 12) {
    console.log("Invierno");
} else {
    console.log("Mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

switch (mes) {
    case 1:
        console.log("31 días");
        break;
    case 2:
        console.log("28 días");
        break;
    case 3:
        console.log("31 días");
        break;
    case 4:
        console.log("30 días");
        break;
    case 5:
        console.log("31 días");
        break;
    case 6:
        console.log("30 días");
        break;
    case 7:
        console.log("31 días");
        break;
    case 8:
        console.log("31 días");
        break;
    case 9:
        console.log("30 días");
        break;
    case 10:
        console.log("31 días");
        break;
    case 11:
        console.log("30 días");
        break;
    case 12:
        console.log("31 días");
        break;
    default:
        console.log("Mes incorrecto");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "italiano";

switch (idioma) {
    case "español":
        console.log("Hola");
        break;
    case "inglés":
        console.log("Hello");
        break;
    case "francés":
        console.log("Bonjour");
        break;
    case "alemán":
        console.log("Hallo");
        break;
    case "italiano":
        console.log("Ciao");
        break;
    case "portugués":
        console.log("Olá");
        break;
    case "chino":
        console.log("你好");
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = 6;
switch (mes) {
    case 1:
        console.log("Invierno");
        break;
    case 2:
        console.log("Primavera");
        break;
    case 3:
        console.log("Primavera");
        break;
    case 4:
        console.log("Verano");
        break;
    case 5:
        console.log("Verano");
        break;
    case 6:
        console.log("Otoño");
        break;
    case 7:
        console.log("Otoño");
        break;
    case 8:
        console.log("Verano");
        break;
    case 9:
        console.log("Otño");
        break;
    case 10:
        console.log("Otoño");
        break;
    case 11:
        console.log("Invierno");
        break;
    case 12:
        console.log("Invierno");
        break;
    default:
        console.log("Mes incorrecto");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Ratón", "Elefante", "Tigre"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("León");
animales.push("Perrito");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let libros = new Set(["El Señor de los Anillos", "Harry Potter", "Cien años de soledad", "Don Quijote de la Mancha", "La Odisea"]);

console.log(libros);

// 5. Añade dos más. Uno de ellos repetido

libros.add("El Señor de los Anillos");
libros.add("El Perfume");
console.log(libros);

// 6. Elimina uno concreto a tu elección

libros.delete("Harry Potter");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has(5)) {
    console.log(meses.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("Verano", ["Junio", "Julio", "Agosto"]);

console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let meses2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(meses2);

let meses3 = new Set(meses2);

console.log(meses3);

let meses4 = new Map([
    ["Meses", meses3]
]);

console.log(meses4);

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma = suma + 1;
}

console.log(suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["José", "Roberto", "Quinonez"];

nombres.forEach(function(nombre) {
    console.log(nombre);
});

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Hola Mundo";

let vocales = 0;

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
        vocales++;
    }
}

console.log(vocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let producto = 1;

numeros.forEach(function(numero) {
    producto = producto * numero;
});

console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

cadena = "Hola Mundo";

let invertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    invertida = invertida + cadena[i];
}

console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbers = [1, 12, 3, 4, 15, 6, 27, 8, 49, 10];

let filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        filteredNumbers.push(numbers[i]);
    }
}

console.log(filteredNumbers);

*/

