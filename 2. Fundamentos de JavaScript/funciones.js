var name= "Angry", edad=25;
// FUNCIONES-> FUNCTION

function imprimirEdad(){
    console.log(`${name} tiene ${edad} años`);
};

function imprimirEdades(name, edad){
    console.log(`El Sr.(a)${name} tiene ${edad} años, bienvenido(a)\nEsta es una función con parámetros`);
};

imprimirEdades("Sherlock", 2);

// ALCANCE DE LAS FUNCIONES::

// el objeto global es la ventana (window) 
// window.variableGlobal
// Alcance Global - Local (dentro de una función)

function emojins(namejin){ // Creamos una variable local "namejin" para que no modifique la variable global name= "Angry";
    namejin = `=￣ω￣= ${namejin} =￣ω￣=\n${namejin} con emojins`;
    console.log(namejin);
};// La variable local solo existe en la función y llamarla solo ejecutaría como no definida.   

emojins(name);