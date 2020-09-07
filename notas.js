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