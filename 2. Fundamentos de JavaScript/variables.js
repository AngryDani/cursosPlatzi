console.log("Hola Gente, GAAAAA!")

// para declarar una variable:

var name; // se ha declarado la variable, pero no se ha inicializado
name= 'AngryDan' // inicializando la variable

console.log('Hola '+ name.toUpperCase());

// JavaScript es un lenguaje DÉBILMENTE  TIPADO

// VARIABLES: STRINGS
/* 
toUpperCase, que sirve para transformar un String a mayúsculas.
toLowerCase, que sirve para transformar el string a minúsculas.
length, que nos indica la cantidad de caracteres que tiene un string.
*/
var apellido= "vidal";
var primeraL= apellido.charAt(0);
console.log("Hola Sr."+apellido.toUpperCase()+ " Alias: "+ name.toUpperCase()
+ "Y su apellido empieza con: "+ primeraL);

// Interpolación del texto -> `` comillas invertidas (alt + 96)
// console.log(`${variable1} ${variable2}`);

console.log(`${name}, estás utilizando la INTERPOLACIÓN DE TEXTO USANDO $ {}, Genial Sr.${apellido.toUpperCase()}`);

// .SUBSTR(DONDE EMPIEZA, CUÁNTOS CARACTERES VA A TOMAR)

var nombre_largo= "DanAngryDaniOggy2000";
console.log(`El nombre largo es: ${nombre_largo}, pero solo queremos AngryDani, entonces usamos substr()`);
console.log("Estás usando la función substr()");
console.log(nombre_largo.substr(3,9));



// VARIABLES NÚMEROS
// Aumentar en un valor numérico --> += #número a aumentar
// Disminuir en un valor numérico --> -= #número a disminuir
var edad=24;
console.log(`Tu edad el año pasado era de ${edad} años`);
console.log("Vamos a aumentar en 1 para el año actual!");
console.log(`Tu edad actual es ${edad+=1}`);

// Usando el módulo Math para redondear

var television= 1239;
var cuotas= 5;
var mensualidad= Math.round(television/cuotas).toFixed(2);
console.log(`El precio del TV es: ${television} y se plantea pagarla en ${cuotas} mensuales.\nPor ende tu cuota mensual es de: ${mensualidad} soles en 5 meses.\nGracias!`);






