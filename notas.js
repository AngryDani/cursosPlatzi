// VARIABLES

var edad= 18;

function votar (edad){
    if (edad===18){
        console.log("Es tu primera votación, felicidades!");
    } else if (edad > 18){
        console.log("Puedes votar, elige sabiamente!");
    }else{
        console.log("No puedes votar, no tienes la edad suficiente!");
    }
}

// RETO PIEDRA PAPEL O TIJERA:

var piedra= "piedra";
var papel= "papel";
var tijera= "tijera";


function juego(bot, humano){
    if (bot===humano){
        console.log("Empate, han escogido las mismas opciones!")
    } else if (bot===piedra && humano===tijera){
        console.log("Gana el botJavas");
    } else if (bot === papel && humano===piedra){
        console.log("Gana el botJavas");
    } else if (bot === tijera && humano===papel){
        console.log("Gana el botJavas");
    } else{
        console.log("Gana el humano");
    }
}


// SWITCH:
var edad=18;
switch(true){
    case (edad===18):
        console.log("Toma tu DNI Azul!");
        break;
    case (edad>18):
        console.log("Ya tienes DNI!");
        break;
    default:
        console.log("Sal de aquí, chibolo pulpín!")
}

// JUEGO CON SWITCH:

var piedra= "piedra";
var papel= "papel";
var tijera= "tijera";

function juego(bot, humano){
    switch(true){
        case (bot===humano):
            console.log("Empate maldita sea!");
            break;
        case (bot===piedra && humano===tijera):
            console.log("Gana el BotJavas!");
            break;
        case (bot === papel && humano===piedra):
            console.log("Gana el BotJavas!");
            break;
        case (bot === tijera && humano===papel):
            console.log("Gana el BotJavas!");
            break;
        default:
            console.log("Gana el humano, joer!")
    }
}


// ARRAYS

var frutas= ["bananas", "fresas", "uvas"];
console.log(frutas);
console.log(frutas.length);

// MÉTODOS DE LOS ARRAYS:
//PUSH
var masFrutas= frutas.push("chirimollas");


// lOOPS FOR AND FOR OFF

// FOR

var nombres= ["Angry", "Dani", "Alvaro", "Sr. Vidal"];

function saludar(nombres){
    console.log(`Hola ${nombres}, un  gusto saludarlo. Atte: JavasBot`);
}
for (var i=0; i < nombres.length; i++){
    saludar(nombres[i]);
}

// FOR OF <> for i in list(python)

for(nombre of nombres){
    saludar(nombre);
}

// LOOPS WHILE

var nombres= ["Angry", "Dani", "Alvaro", "Sr. Vidal"];
function saludar(nombres){
    console.log(`Hola ${nombres}, un  gusto saludarlo. Atte: JavasBot`);
}

// WHILE:

while(nombres.length>0){
    var nombre= nombres.shift();
    saludar(nombre);
}


// OBJECTS:: 

// todo objeto es una variable::

var libro = { // los objetos se manejan en propiedads palabra_clave = valor [diccionaron en Python]
    paginas: 200,
    nombre: "Estrategia", // es coma y no punto y coma
    autor: "Fulano",
    metodo: function(){
        console.log(`El libro ${this.nombre} tiene ${this.paginas} paginas y fue escrita por ${this.autor}`)
    }
}

// llamar al método del objeto::

libro.metodo(); //:: El libro Estrategia tiene 200 paginas y fue escrita por Fulano

// Objects y su función constructora::

function pais(nombre, comida){
    this.nombre= nombre;
    this.comida= comida;
}

// crear una variable según la función constructora::

var peru = new pais("Perú", "Ceviche"); //asignando los valores

var mexico = new pais("Mexico", "Pocholo");


// RECORRER ARRAYS::


// pagina que sirve consola para JavaScript::
// https://jsconsole.com/

var libros=[
    {nombre: "Estrategia", paginas: 800},
    {nombre: "Historia", paginas:300},
    {nombre: "Matematicas", paginas: 150},
    {nombre: "Ciencia Politica", paginas: 600},
    {nombre: "Coquito", paginas: 50},
    {nombre: "Biblia", paginas:1900},
];

// método para filtrar::

var libros_filtrados= libros.filter(function(libros){
    return libros.paginas<=200
});

// MÉTODO FIND() devuelve true o false

var libro_nombre = libros.find(function(libros){
    return libros.nombre === "Historia";
});

// MÉTODO FOREACH()
libros.forEach(function(libros){
    console.log(libros.nombre);
});

// MÉTODO .SOME() devuelve true o false

libros.some(function(libros){
    return libros.paginas > 300;
});

// Eliminando elementos de un Array

// PUSH()

var frutas= [
    "plátano",
    "manzana",
    "uva",
    "mandarina"
];