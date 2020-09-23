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

player(Angry);
// Así mismo se puede crear las llave:valor del objeto en el mismo llamado de la función::
player({
    nick: "Oggy2000",
    nombre: "Alvaro",
    game: "Counter Strike 1.6",
    wins: 25
});