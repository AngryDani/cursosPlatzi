// OBJETOS EN JAVASCRIPT::
var Angry = {
    nick: "AngryDani",
    nombre: "Alvaro",
    game: "CSGO",
    wins: 14,
    fechaInicio: 2008
};
/* 
En la nueva versión de JavaScript se puede en la CONSTRUCCIÓN DE LA FUNCIÓN asignar las variables
de los objetos (futuramente llamados) mediante las llaves dentro del parámetro de la función:
función ( { atributo1, atributo2, etc. }) -> construyendo la función, luego::
se llama a la función y entre el parámetro el nombre del objeto::
función( OBJETO );
*/
function player({ nick, nombre, game, wins }){
    console.log(`El jugador ${nick}, se llama ${nombre}\nTiene ${wins} victorias en el juego ${game}`);
};
// llamando a las funciones :: 
player(Angry);
// Así mismo se puede crear las llave:valor del objeto en el mismo llamado de la función::
player({
    nick: "Oggy2000",
    nombre: "Alvaro",
    game: "Counter Strike 1.6",
    wins: 25
});



// DESESTRUCTURAR OBJETOS ::


// Primero creo mi objeto Alvaro ::

Alvaro= {
    nombre: "Alvaro",
    edad: 25,
    hobby: "Aprender"
}
// Una función con DESESTRUCTURACIÓN DE OBJETOS ::
function saludar (persona){
    var { nombre } = persona; // var { atributo del objeto } = objeto;
    var { edad } = persona;
    var { hobby } = persona;
    
    console.log(`Hola Sr.(a)${nombre}, mucho gusto en saludarlo,\nEsta es una función con desestructuración de objetos, por ello\nsé que tiene ${edad} años y también sé que le gusta ${hobby}.\nTenga buen día!`);
};

saludar(Alvaro);

// Parámetros como referencia o como valor

// Podemos modificar mediante una función una variable global, para evitar ello, podemos usasr los 3 puntos ...
// Me retorna un objeto paralelo dentro de la función ::
function yearBorn(persona){
    return{
        ...persona,
        edad: 2020-persona.edad
    }
};

console.log(yearBorn(Alvaro));
/*
yearBorn(Alvaro);
{nombre: "Alvaro", edad: 1995, hobby: "Aprender"}
Alvaro;
{nombre: "Alvaro", edad: 25, hobby: "Aprender"} 
*/
